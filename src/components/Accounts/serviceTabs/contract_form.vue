<template>
<div>



   <div class="global-form-background">
       <div class="global-form-background-img">
           <img v-bind:src="this.$props.serviceimg">
       </div><!--background image-->
       <div class="global-form-background-img-overlay"></div>



            <form @submit.prevent class="mdl-shadow--8dp global-form">
                 
                 <div class="global-form-header">
                     <h3>Select your payment method</h3>
                 </div><!---header-->              

                 <div class="global-form-content">
                       
                       <div class="global-form-selector">
                           <p>Paypal</p>
                       </div><!--form selectoor--->


                       <div class="global-form-description">
                           
                               <div class="global-form-payment-election">
                                   <label>Selected plan:</label>
                                   <h4>{{selected_option_title}}</h4>
                                   <br>
                                   <label>Price:</label>
                                   <p>{{selected_option_price}}</p>
                                   <br>
                                   <label>Description:</label>
                                   <p>{{selected_option_description}}</p>
                                   <br>                                   
                                   <label>Time:</label>
                                   <p>{{selected_option_time}}</p>
                               </div><!---election-->

                       </div><!---description-->


                       <button class="global-button">checkout</button>

                 </div><!---content--->

            </form><!---payment wizard form-->

   </div>


</div>
</template>

<script>
import { db } from '../../../firebaseConfig.js'
export default {
    name: 'contract_form',
    props:['selectedPlan','serviceimg'],
    data(){
        return{
          selected_option_title:null,
          selected_option_price:null,
          selected_option_description:null,
          selected_option_time:null,
        }
    },

    





    mounted(){

     
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


    }






}
</script>
