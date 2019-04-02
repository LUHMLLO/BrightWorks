<template>
<div>

       <div class="global-grid">

           <div class="global-price-col mdl-shadow--2dp">

               <div class="global-price-col-header">
                   <div class="global-price-col-header-title">
                       <h3>option title here</h3>
                   </div><!---title--->

                   <div class="global-price-col-header-price">
                       <h4>price</h4>
                       <span>/monthly/year</span>
                   </div>
               </div><!---header--->


               <div class="global-price-col-content">

                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, enim at ex placeat quae et minus voluptate cumque alias libero dolorem repudiandae similique exercitationem incidunt! Repudiandae a laboriosam tempora iure.</p>

                  <div class="global-price-col-details">
                      <div class="global-price-col-details-detail">
                          <i class='uil uil-minus'></i><span>detail</span>
                      </div><!---detail--->
                  </div><!--details-->
               </div><!--content--->



               <button class="global-button">Select</button>
           </div><!----global price col--->

       </div><!---grid-->

              
              <br><br><br>

            


            <form @submit.prevent class="mdl-shadow--2dp global-form">
                 
                 <div class="global-form-header">
                     <h3>choose your payment method</h3>
                 </div><!---header-->

                 <div class="global-form-content">
                       
                       <div class="global-form-selector">
                           <p>Paypal</p>
                       </div><!--form selectoor--->


                       <div class="global-form-description">
                           
                               <div class="global-form-payment-election">
                                   <p>selected option title here</p>
                                   <p>price</p>
                               </div><!---election-->

                       </div><!---description-->


                       <button class="global-button">checkout</button>

                 </div><!---content--->

            </form><!---payment wizard form-->









</div>
</template>



<script>
import {db} from '@/firebaseConfig.js'

export default {
    name:'contract',
    props:['serviceurlname'], 
    data(){
        return{

        }
    },

   
}
</script>

