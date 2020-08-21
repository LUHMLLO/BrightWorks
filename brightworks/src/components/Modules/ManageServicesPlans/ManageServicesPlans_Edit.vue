<template>
<div>
<div class="global-form-background">

        <div class="global-form-background-img">
           <img v-bind:src="img">
       </div><!--background image-->
       <div class="global-form-background-img-overlay"></div>

              
              <form @submit.prevent class="global-rounded-form mdl-shadow--2dp">

                  
                <h3>Add a new payment</h3>              
                 

                        <div class="global-rounded-form-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="name" id="" v-model="name" placeholder="name" required>
                        </div><!--global floating input-->                


                        <div class="global-rounded-form-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="description" id="" v-model="description" placeholder="description" required>
                        </div><!--global floating input-->
        
                        <div class="global-rounded-form-input">
                            <i class='uil uil-dollar-alt'></i>
                            <input type="text" name="price" id="" @keypress="stripTheGarbage($event)" @blur="formatDollars()" v-model="price" placeholder="price" required>
                        </div><!--global floating input-->  

                        <div class="global-rounded-form-buttons" style="border-bottom: none !important">
                            
                              
                          <button type="radio" value="Annual"  v-on:click="timeAnnualIsSelected('Annual')"    class="global-button"  v-bind:class="{globalActiveTab:timeAnnual}">Annual</button>
                          <button type="radio" value="Monthly" v-on:click="timeMonthlyIsSelected('Monthly')"  class="global-button"  v-bind:class="{globalActiveTab:timeMonthly}">Monthly</button>
                          <button type="radio" value="Weekly"  v-on:click="timeWeeklyIsSelected('Weekly')"    class="global-button"  v-bind:class="{globalActiveTab:timeWeekly}">Weekly</button>
                          <button type="radio" value="Once"    v-on:click="timeOnceIsSelected('Once')"        class="global-button"  v-bind:class="{globalActiveTab:timeOnce}">Once</button>
                        
                        
                        
                        </div><!--global floating input-->  

                  
                  
                  <br><br>
                  
                            <button class="global-button" v-on:click="goBackCancelEdit">Cancel</button>
                            <button class="global-button" v-on:click="saveChangesForThisService">Save changes</button>
                            <button class="global-button" v-on:click="DeleteThisService">Delete</button>
                  

              </form>


</div><!---form background--->
</div>
</template>

<script>
import {db} from '../../../firebaseConfig.js'
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

            img:null,

            Selected_service_id:null,

            myservices:[],

            timeAnnual: false,
            timeMonthly: false,
            timeWeekly:false,
            timeOnce: false,            
            
        }
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
                    vm.img = doc.data().service_img

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
                    this.img = doc.data().img
                    
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
                            this.$router.go(-1)
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
             this.$router.go(-1)
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
            },


        timeAnnualIsSelected(value){
            this.time = value
            //console.log(this.time)
            this.timeAnnual = true
            this.timeMonthly = false
            this.timeWeekly = false
            this.timeOnce = false
        },
        timeMonthlyIsSelected(value){
            this.time = value
            //console.log(this.time)
            this.timeAnnual = false
            this.timeMonthly = true
            this.timeWeekly = false
            this.timeOnce = false
        },
        timeWeeklyIsSelected(value){
            this.time = value
            //console.log(this.time)
            this.timeAnnual = false
            this.timeMonthly = false
            this.timeWeekly = true
            this.timeOnce = false
        },        
        timeOnceIsSelected(value){
            this.time = value
            //console.log(this.time)
            this.timeAnnual = false
            this.timeMonthly = false
            this.timeWeekly = false
            this.timeOnce = true
        },
      


    },




    
}
</script>
