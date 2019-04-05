<template>
<div>

        <div id="manage-services-header" class="global-header mdl-shadow--2dp">
          <h3 class="global-header-title-simple" style="">Edit this plan</h3>
        </div><!--manage services header-->


            <div id="asd-section" class="global-section">
                        <h4>Edit or delete this service</h4>
                        
                        <form @submit.prevent>
                            <div class="global-grid">             

                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="name" id="" v-model="name" placeholder="name" required>
                                    </div><!--global floating input-->                


                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <input type="text" name="description" id="" v-model="description" placeholder="description" required>
                                    </div><!--global floating input-->
                    
                                    <div class="global-floating-input">
                                        <i class='uil uil-dollar-alt'></i>
                                        <input type="text" name="price" id="" @keypress="stripTheGarbage($event)" @blur="formatDollars()" v-model="price" placeholder="price" required>
                                    </div><!--global floating input-->  

                                    <div class="global-floating-input">
                                        <i class='uil uil-file-blank'></i>
                                        <select name="time" id="" v-model="time" required style="outline:none;border:none;">
                                            <option value="Annual">Annual</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Daily">Daily</option>
                                            <option value="Daily">One pay</option>
                                        </select>                             
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
import {firebase ,db} from '../../../firebaseConfig.js'
import Swal from 'sweetalert'
export default {
    name: 'ManageServicesPlans_Edit',
    data(){
        return{

            service_id:null,

            name:null,
            description:null,
            price:null,
            time:null,

            Selected_service_id:null,

            myservices:[],
            
        }
    },



    created(){
        let self = this;


          db.collection('services').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data().schedule)
                
                const data ={
                  
                   'service_id': doc.data().service_id,
                   'service_name':doc.data().name,
                 }
                   self.myservices.push(data)


            })  
        })      
               

    },



    beforeRouteEnter( to, from, next){        
          db.collection('plans').where('plan_id' , '==' , to.params.plan_id).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              next(vm => {
                    vm.name = doc.data().name
                    vm.description = doc.data().description
                    vm.price = doc.data().price
                    vm.time = doc.data().time
                    vm.service_id = doc.data().service_id
                    vm.plan_id = doc.data().plan_id
                    vm.creator_id = doc.data().creator_id
                    vm.time = doc.data().time

              })
            })
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
        
      fetchData (){
        db.collection('plans').where('plan_id', '==' , this.$route.params.plan_id).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.name = doc.data().name
                    this.description = doc.data().description
                    this.price = doc.data().price
                    this.time = doc.data().time
                    this.service_id = doc.data().service_id
                    this.plan_id = doc.data().plan_id
                    this.creator_id = doc.data().creator_id
                    this.time = doc.data().time
                    
          })
        })
      },


      DeleteThisService(){
          Swal({ title: "Deleting service" , text: "Are you sure u want to remove this service from your list?", icon: "warning", buttons:["i changed my mind","yes, remove it"],})
          .then((deletethisservice) => {
            if(deletethisservice){
                        db.collection('plans').where('plan_id', '==' , this.$route.params.plan_id).get().then(querySnapshot =>{
                        querySnapshot.forEach(doc => {
                            doc.ref.delete()
                            this.$router.push('/manage_plans')
                        })
                        })
             }
            })
      },
      goBackCancelEdit() {
            this.$router.push('/manage_plans')          
      },

      saveChangesForThisService(){
          Swal({ title: "Saving changes" , text: "Are you sure u want to save this changes?", icon: "warning", buttons:["i changed my mind","yes, save it"],})
          .then((savingChanges) => {
            if(savingChanges){
                        db.collection('plans').where('plan_id', '==' , this.$route.params.plan_id).get().then(querySnapshot =>{
                        querySnapshot.forEach(doc => {
                            doc.ref.update({
                                name: this.name,
                                description: this.description,
                                price: this.price,
                                time: this.time,
                            })
                        })
                        })
             }
             this.$router.push('/manage_plans')
            })          
      },






      stripTheGarbage(e) {
      if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
        e.preventDefault()
      }
    },

    formatDollars() {
            if (this.price != '') {
                    var num = this.price;
                    
                    num = Number(num);
                            
                    var countDecimals = function (value) {
                    if(Math.floor(value) === value) return 0;
                    return value.toString().split(".")[1].length || 0; 
                    }
                    
                    var decimal = countDecimals(num);
                    
                    if (decimal < 2) {
                    num = num.toFixed(2)
                    }
                    
                    if (decimal > 2) {
                    num = num.toFixed(decimal)
                    }
                    
                    if (parseInt(num) < 1) {
                    num = "." + String(num).split(".")[1];
                    }

                    this.price = num;
                }
            }

      


    },




    
}
</script>
