<template>
<div>






 <div class="global-grid">

           <div class="global-price-col mdl-shadow--2dp" v-for="(Plan,availablePlansData) in AvailablePlans" :key="availablePlansData">

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

               </div><!--content--->

               <router-link :to="{ name: 'ManageServicesPlans_Edit', params: {plan_id: Plan.plan_id}}">
                  <button class="global-button">edit</button>
               </router-link>

           </div><!----global price col--->

       </div><!---grid-->



          








</div>
</template>





<script>
import {firebase,db} from '../../../firebaseConfig.js'

export default {
    name: 'ManageServicesPlans_View',
    data(){
        return{
    
            AvailablePlans:[],

        }
    },




    created(){
        let self = this;   


          db.collection('plans').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())
                
                const data ={
                   'plan_id': doc.data().plan_id,
                   'creator_id': doc.data().creator_id,
                   'service_id': doc.data().service_id,
                   'description':doc.data().description,
                   'name':doc.data().name,
                   'price':doc.data().price,
                   'time': doc.data().time,
                 }
                   self.AvailablePlans.push(data)
                 

            })  
        })
        
            
    },



}
</script>
