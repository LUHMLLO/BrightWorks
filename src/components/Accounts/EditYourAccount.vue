<template>
<div>



          <div class="global-header mdl-shadow--2dp">

          <div class="global-header-bg">
              <img v-bind:src="img">
          </div>

          <div class="global-header-bg-overlay"></div>

          <div class="global-header-img mdl-shadow--2dp">
              <img v-bind:src="img">
          </div>


          <h3 class="global-header-title">{{name}}</h3>
          

      </div><!--header-->

      <br>



      <form @submit.prevent>
                  <div class="global-grid">
                        <div class="global-floating-input">
                            <i class='uil uil-scenery'></i>
                            <input type="text" name="img" id="" v-model="img" placeholder="img (url only)" required>
                        </div><!--global floating input-->                       
        
                        <div class="global-floating-input">
                            <i class='uil uil-user'></i>
                            <input type="text" name="name" id="" v-model="name" placeholder="name" required>
                        </div><!--global floating input-->                

                        <div class="global-floating-input">
                            <i class='uil uil-mobile-android'></i>
                            <input type="text" name="phone" id="" v-model="phone" placeholder="phone" required>
                        </div><!--global floating input-->

                  </div><!--global grid-->

                  
                  
                  <br><br>
                  <button class="global-button" v-on:click="EditAccount">Save changes</button>
                  

              </form>





</div>
</template>


<script>
import { db } from '../../firebaseConfig.js'
import Swal from 'sweetalert'

export default {
    name: 'EditYourAccount',
    data(){
        return{

            img:null,
            phone:null,
            name:null,

            
        }
    },
    
    
    
    
    
    beforeRouteEnter( to, from, next){        
          db.collection('users').where('user_id' , '==' , to.params.userid).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              next(vm => {
                    vm.img = doc.data().img
                    vm.name = doc.data().name
                    vm.phone = doc.data().phone
              })
            })
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
        
      fetchData (){
        db.collection('users').where('user_id', '==' , this.$route.params.userid).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.imh = doc.data().img
                    this.name = doc.data().name
                    this.phone = doc.data().phone
          })
        })
      },

        EditAccount: function(){
          Swal({ title: "Saving changes" , text: "Are you sure u want to save this changes?", icon: "warning", buttons:["i changed my mind","yes, save it"],})
          .then((savingChanges) => {
            if(savingChanges){
                        db.collection('users').where('user_id', '==' , this.$route.params.userid).get().then(querySnapshot =>{
                        querySnapshot.forEach(doc => {
                            doc.ref.update({
                                name: this.name,
                                img: this.img,
                                phone: this.phone,
                            })
                        })
                        })
             }
            })          

        },




    }








}
</script>
