<template>
<div>



   <div class="global-horizontal-position"  v-for="(service, servicesData) in filteredServices" :key="servicesData">

    

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
            <button class="global-button">edit</button>
            <button class="global-button">visit</button>
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
    filteredServices: function() {
        let result = this.services
          return result
    }

  },

  updated(){
         this.filteredServices()
  }


}
</script>
