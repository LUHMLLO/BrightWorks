<template>
<div>



   <div class="global-form-background">
       <div class="global-form-background-img">
           <img v-bind:src="this.$props.serviceimg">
       </div><!--background image-->
       <div class="global-form-background-img-overlay"></div>

              
           
            <form @submit.prevent class="mdl-shadow--8dp global-form">
                 
                 <div class="global-form-header">
                     <h3>Lets check you out</h3>
                 </div><!---header-->              

                 <div class="global-form-content">
                       
                       <div class="global-form-selector">
                           <p>Powered by Paypal</p>
                       </div><!--form selectoor--->


                       <div class="global-form-description">
                           
                               <div class="global-form-payment-election">
                                   <label>Service:</label>
                                   <h6>{{this.$props.servicename}}</h6>
                                   <br>
                                   <label>Selected plan:</label>
                                   <h6>{{selected_option_title}}</h6>
                                   <br>
                                   <label>Price:</label>
                                   <h6>{{selected_option_price}}</h6>
                                   <br>
                                   <label>Description:</label>
                                   <h6>{{selected_option_description}}</h6>
                                   <br>                                   
                                   <label>Time:</label>
                                   <h6>{{selected_option_time}}</h6>
                               </div><!---election-->

                       </div><!---description-->


                       <button class="global-button" @click="AddPlan">checkout with paypal</button>

                 </div><!---content--->

            </form><!---payment wizard form-->

   </div>


</div>
</template>

<script>
import { firebase, db } from '../../../firebaseConfig.js'
import Swal from 'sweetalert'
export default {
    name: 'contract_form',
    props:['selectedPlan','serviceimg','servicename','hidethiscontractform'],
    data(){
        return{
          selected_option_title:null,
          selected_option_price:null,
          selected_option_description:null,
          selected_option_time:null,
        }
    },

    





    created(){

     
     this.fetchPlanId()


    },






    methods:{

        fetchPlanId(){
            //console.log(this.$props.selectedPlan)
            db.collection('plans').where('plan_id','==',this.$props.selectedPlan).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {      
                    //console.log(doc.data())             
                    this.selected_option_title = doc.data().name
                    this.selected_option_price = doc.data().price
                    this.selected_option_description = doc.data().description,
                    this.selected_option_time = doc.data().time
                })  
            })


        },

        AddPlan(){
            let self = this;
            db.collection('plans_adquired').add({
            })
            .then(function(docRef) {
                
                db.collection('plans_adquired').doc(docRef.id).set({
                
                selected_option_title: self.selected_option_title,
                selected_option_price: self.selected_option_price,
                selected_option_description: self.selected_option_description,
                selected_option_time: self.selected_option_time,
                buyer_id: firebase.auth().currentUser.uid,
                service_plan_parent: self.$props.servicename,
                })

                Swal({ title: "Congrats ! ", text: "Thanks for your purchase !!", icon: "success", button: "nice!",}).then(() => {self.$router.go("manage_plans")})
            })
            
        },

                    stripTheGarbage(e) {
                if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
                    e.preventDefault()
                }
                },

    },







}
</script>
