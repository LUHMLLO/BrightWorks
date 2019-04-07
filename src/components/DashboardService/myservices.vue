<template>
<div>



   <div class="global-horizontal-position"  v-for="(service, servicesData) in filteredservices" :key="servicesData">

    

    <div class="global-detailed-service mdl-shadow--2dp">
        
        <div class="global-detailed-service-header">
          <div class="global-detailed-service-header-img mdl-shadow--2dp">
              <img v-bind:src="service.img">
          </div>
           
           <div class="global-detailed-service-header-title">
               <h3>{{service.name}}</h3>
           </div>
        </div><!---header-->

        <div class="global-detailed-service-content">
            <p>{{service.description}}</p>
        </div><!---content--->


        <div class="global-detailed-service-actions">
            <router-link :to="{ name: 'ManageServices_Edit', params: {service_id: service.service_id}}">
              <button class="global-button">edit</button>
            </router-link>
            
            <router-link :to="{ name: 'Service', params: {service_id: service.service_id || 404}}">
              <button class="global-button">visit</button>
            </router-link>

    
        </div><!----actions-->


    </div><!---detailed service--->



   </div> <!----global horizontal position--->




</div>
</template>


<script>

import {firebase,db} from '../../firebaseConfig.js'
export default {
    name: 'myservices',
    data(){
        return{

            services:[],

        }
    },




  created(){
         let self = this;  

          db.collection('services').where('owner_id', '==', firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data().url_name) 
                 const data ={
                   'user_id': doc.data().user_id,
                   'service_id': doc.data().service_id,
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                 }

                 if(doc.data().availability == true){
                   self.services.push(data)
                 }

            })
          });
  },


  computed: {
    filteredservices: function() {
        let result = this.services
          return result
    }

  },


}
</script>
