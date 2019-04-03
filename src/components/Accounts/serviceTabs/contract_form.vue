<template>
<div>




            <form @submit.prevent class="mdl-shadow--2dp global-form">
                 
                 <div class="global-form-header">
                     <h3>Select your payment method</h3>
                 </div><!---header-->              

                 <div class="global-form-content">
                       
                       <div class="global-form-selector">
                           <p>Paypal</p>
                       </div><!--form selectoor--->


                       <div class="global-form-description">
                           
                               <div class="global-form-payment-election">
                                   <p>{{selected_option_title}}</p>
                                   <p>{{selected_option_price}}</p>
                               </div><!---election-->

                       </div><!---description-->


                       <button class="global-button">checkout</button>

                 </div><!---content--->

            </form><!---payment wizard form-->




</div>
</template>

<script>
import { db } from '../../../firebaseConfig.js'
export default {
    name: 'contract_form',
    props:['selectedPlan'],
    data(){
        return{
          selected_option_title:null,
          selected_option_price:null,
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
                })  
            })
        },


    }






}
</script>
