<template>
<div>

      <div id="asd-section" class="global-section">
              <h4>Add a new service</h4>
              
              <form @submit.prevent>
                  <div class="global-grid">                   
        
                        <div class="global-floating-input">
                            <select name="serviceIDs" id="" v-model="Selected_service_id" required style="outline:none;border:none;">
                                <option v-bind:value="myservice.service_id"  v-for="(myservice,myservicesData) in myservices" :key="myservicesData">{{myservice.service_name}}</option>
                            </select>                            
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
                  <button class="global-button" v-on:click="AddPlan">Add new plan</button>
                  

              </form>
              
            </div><!---available section-->

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


    updated(){
        let self = this;
        //console.log(this.Selected_service_id)
          db.collection('services').where('service_id','==',self.Selected_service_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(self.service_name)

                  
                   self.service_id = doc.data().service_id


            })  
        })          
    },




    methods: {
        AddPlan(){
            let self = this;
            db.collection('plans').add({
            })
            .then(function(docRef) {
                
                db.collection('plans').doc(docRef.id).set({
                plan_id: docRef.id,
                creator_id: self.owner_id,
                service_id: self.service_id,
                name: self.name,
                description: self.description,
                price: self.price,
                time: self.time,
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
