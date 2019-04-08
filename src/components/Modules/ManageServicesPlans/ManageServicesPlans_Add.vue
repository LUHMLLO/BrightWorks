<template>
<div>

              
              <form @submit.prevent class="global-rounded-form mdl-shadow--2dp">

                  
                <h3>Add a new payment</h3>              
        
                        <div class="global-rounded-form-input">
                            <select name="serviceIDs" id="" v-model="Selected_service_id" required style="outline:none;border:none;">
                                <option v-bind:value="myservice.service_id"  v-for="(myservice,myservicesData) in myservices" :key="myservicesData">{{myservice.service_name}}</option>
                            </select>                            
                        </div><!--global floating input-->                

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
                  <button class="global-button" v-on:click="AddPlan">Add new plan</button>
                  

              </form>
              
</div>
</template>

<script>
import {firebase, db} from '../../../firebaseConfig.js'
import Swal from 'sweetalert'

export default {
    name:'ManageServicesPlans_Add',
    data(){
        return{

            service_id:null,

            name:null,
            description:null,
            price:null,
            time:null,

            owner_id:firebase.auth().currentUser.uid,

            Selected_service_id:null,
            service_img:null,

            myservices:[],


            timeAnnual: false,
            timeMonthly: false,
            timeWeekly:false,
            timeOnce: false,


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


    updated(){
        let self = this;
        //console.log(this.Selected_service_id)
          db.collection('services').where('service_id','==',self.Selected_service_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(self.service_name)

                  
                   self.service_id = doc.data().service_id
                   self.service_img = doc.data().img


            })  
        })          
    },




    methods: {

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


        AddPlan(){
            let self = this;
            db.collection('plans').add({
            })
            .then(function(docRef) {
                
                db.collection('plans').doc(docRef.id).set({
                plan_id: docRef.id,
                owner_id: self.owner_id,
                service_id: self.service_id,
                name: self.name,
                description: self.description,
                price: self.price,
                time: self.time,
                service_img: self.service_img
                })

                Swal({ title: "Congrats ! ", text: "Your payment plan has been added to your service", icon: "success", button: "nice!",}).then(() => {self.$router.go("manage_plans")})
            })
            .catch(error => Swal(error))
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
