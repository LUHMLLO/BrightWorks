<template>
<div>






 <div class="global-grid">

           <div class="global-price-col mdl-shadow--2dp" v-for="(plan,availablePlansData) in AvailablePlans" :key="availablePlansData">

               <div class="global-form-description">
                           
                               <div class="global-form-payment-election">
                                   <label>Service:</label>
                                   <h6>{{plan.service}}</h6>
                                   <br>
                                   <label>Selected plan:</label>
                                   <h6>{{plan.title}}</h6>
                                   <br>
                                   <label>Price:</label>
                                   <h6>{{plan.price}}</h6>
                                   <br>
                                   <label>Description:</label>
                                   <h6>{{plan.description}}</h6>
                                   <br>                                   
                                   <label>Time:</label>
                                   <h6>{{plan.time}}</h6>
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
    data(){
        return{
    
            AvailablePlans:[],

        }
    },




    created(){
        let self = this;   


          db.collection('plans_adquired').where('buyer_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())
                
                const data ={                   
                   'title': doc.data().selected_option_title,
                   'time': doc.data().selected_option_time,
                   'price': doc.data().selected_option_price,
                   'description': doc.data().selected_option_description,

                 }
                 if(doc.data().selected_option_time == 'Once'){
                    self.AvailablePlans.push(data)
                 }
                 

            })  
        })
        
            
    },



}
</script>