<template>
<div>






 <div class="global-grid">

           <div class="global-price-col mdl-shadow--2dp" v-for="(Plan,availablePlansData) in AvailablePlans" :key="availablePlansData">

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

               <!-- <router-link :to="{ name: 'ManageServicesPlans_Edit', params: {plan_id: Plan.plan_id}}">
                  <button class="global-button">edit</button>
               </router-link> -->

           </div><!----global price col--->

       </div><!---grid-->



          








</div>
</template>





<script>
import {firebase,db} from '../../../firebaseConfig.js'

export default {
    name: 'AdquiredServices',
    props:['selectedPlan','servicename'],
    data(){
        return{
    
            AvailablePlans:[],

        }
    },




    created(){
        let self = this;   


          db.collection('plans_adquired').where('selected_option_title','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())
                
                const data ={                   
                   'selected_option_title': doc.data().selected_option_title,
                   'selected_option_time': doc.data().selected_option_time,
                   'selected_option_price': doc.data().selected_option_price,
                   'selected_option_description': doc.data().selected_option_description,

                 }
                   self.AvailablePlans.push(data)
                 

            })  
        })
        
            
    },



}
</script>