<template>
<div>
       <div class="global-grid">

           <div class="global-price-col mdl-shadow--2dp" v-for="(Plan,availablePlansData) in availablePlans" :key="availablePlansData">

               <div class="global-price-col-header">
                   <div class="global-price-col-header-title">
                       <h3>{{Plan.name}}</h3>
                   </div><!---title--->

                   <div class="global-price-col-header-price">
                       <h4>{{Plan.price}}</h4>
                       <span>/{{Plan.time}}</span>
                   </div>
               </div><!---header--->


               <div class="global-price-col-content">

                   <p>{{Plan.description}}</p>

                
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
    props:['serviceid'], 
    data(){
        return{

               
          availablePlans:[],
  

        }
    },




    created(){        
         this.getProps()
    },

    methods:{
        getProps(){
        let self = this;      
          db.collection('plans').where('service_id' , '==' , this.$props.serviceid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())

                const data ={
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price':  doc.data().price,
                   'service_id': doc.data().service_id,
                   'time': doc.data().time,
                 }
                   self.availablePlans.push(data)

            })
          })
        },
    },





   
}
</script>

