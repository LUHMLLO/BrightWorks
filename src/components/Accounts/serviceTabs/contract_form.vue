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


                       <button class="global-button">checkout with paypal</button>

                 </div><!---content--->

            </form><!---payment wizard form-->

   </div>


</div>
</template>

<script>
import { db } from '../../../firebaseConfig.js'
export default {
    name: 'contract_form',
    props:['selectedPlan','serviceimg','servicename'],
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
