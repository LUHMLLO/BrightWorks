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


            <div id="asd-section" class="global-section">
                        <h4>Edit or delete this service</h4>
                        
                        <form @submit.prevent>
                            <div class="global-grid">
                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="img" id="" v-model="img" placeholder="img (url only)" required>
                                    </div><!--global floating input-->

                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="url" id="" v-model="url" placeholder="url name" required>
                                    </div><!--global floating input-->                         
                    
                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="name" id="" v-model="name" placeholder="name" required>
                                    </div><!--global floating input-->                

                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="description" id="" v-model="description" placeholder="description" required>
                                    </div><!--global floating input-->
                    
                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="price" id="" v-model="price" placeholder="price" required>
                                    </div><!--global floating input-->  

                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="schedule" id="" v-model="schedule" placeholder="schedule" required>
                                    </div><!--global floating input-->   

                                    <div class="global-floating-input">
                                        <div v-if="ServiceIsEnable" v-on:click="DisableService"><i class='uil uil-toggle-on'></i><span>available</span></div>
                                        <div v-if="ServiceIsDisable" v-on:click="EnableService"><i class='uil uil-toggle-off'></i><span>disabled</span></div>
                                    </div><!--global floating input-->

                            </div><!--global grid-->

                            
                            
                            <br><br>
                            <button class="global-button" v-on:click="goBackCancelEdit">Cancel</button>
                            <button class="global-button" v-on:click="saveChangesForThisService">Save changes</button>
                            <button class="global-button" v-on:click="DeleteThisService">Delete</button>
                            

                        </form>
                        
                        </div><!---available section-->









</div>
</template>

<script>
import {db} from '../../../firebaseConfig.js'
import Swal from 'sweetalert'
export default {
    name: 'ManageServices_Edit',
    data(){
        return{

            name:null,
            img:null,
            description:null,
            url:null,
            price:null,
            schedule: null,
            availability:null,
            ServiceIsEnable: null,
            ServiceIsDisable: null,
            
        }
    },





    beforeRouteEnter( to, from, next){        
          db.collection('services').where('url_name' , '==' , to.params.url_name).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              next(vm => {
                    vm.url = doc.data().url_name
                    vm.img = doc.data().img
                    vm.name = doc.data().name
                    vm.description = doc.data().description
                    vm.price = doc.data().price
                    vm.schedule = doc.data().schedule
                    vm.availability = doc.data().availability

                    
                    //console.log(doc.data().availability)

                    if (doc.data().availability === true){
                        vm.ServiceIsEnable = true
                        vm.ServiceIsDisable = false
                    }
                    if (doc.data().availability === false){
                        vm.ServiceIsEnable = false
                        vm.ServiceIsDisable = true
                    }    

              })
            })
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
        
      fetchData (){
        db.collection('services').where('url_name', '==' , this.$route.params.url_name).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.url = doc.data().url_name
                    this.imh = doc.data().img
                    this.name = doc.data().name
                    this.description = doc.data().description
                    this.price = doc.data().price
                    this.schedule = doc.data().schedule
                    this.availability = doc.data().availability               
                    
          })
        })
      },


      DeleteThisService: function(){
          Swal({ title: "Deleting service" , text: "Are you sure u want to remove this service from your list?", icon: "warning", buttons:["i changed my mind","yes, remove it"],})
          .then((deletethisservice) => {
            if(deletethisservice){
                        db.collection('services').where('url_name', '==' , this.$route.params.url_name).get().then(querySnapshot =>{
                        querySnapshot.forEach(doc => {
                            doc.ref.delete()
                            this.$router.push('/manage_services')
                        })
                        })
             }
            })
      },
      goBackCancelEdit: function() {
            this.$router.push('/manage_services')          
      },

      saveChangesForThisService: function(){
          Swal({ title: "Saving changes" , text: "Are you sure u want to save this changes?", icon: "warning", buttons:["i changed my mind","yes, save it"],})
          .then((deletethisservice) => {
            if(deletethisservice){
                        db.collection('services').where('url_name', '==' , this.$route.params.url_name).get().then(querySnapshot =>{
                        querySnapshot.forEach(doc => {
                            doc.ref.update({
                                name: this.name,
                                description: this.description,
                                price: this.price,
                                schedule: this.schedule,
                                url_name: this.url,
                                img: this.img,
                                availability: this.availability,
                            })
                        })
                        })
             }
            })          
      },


      EnableService: function(){
            this.availability = true
            this.ServiceIsEnable = true
            this.ServiceIsDisable = false
      },
      DisableService: function(){
            this.availability = false
            this.ServiceIsEnable = false
            this.ServiceIsDisable = true
      },


    },




    
}
</script>
