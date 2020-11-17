<template>
<div>





            <div id="available-section" class="global-section">
                <h4>Available services</h4>
                <div class="global-horizontal-scroll">
                                        

                    <div class="global-horizontal-position"  v-for="(service,AvailableServicesData) in filteredAvailableServices" :key="AvailableServicesData">

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

                    </div>
                            
                </div>
            </div><!---available section-->


            


            <div id="unavailable-section" class="global-section">
                <h4>Not available services</h4>
                <div class="global-horizontal-scroll"> 
                    
                        <div class="global-horizontal-position"  v-for="(service,UnavailableServicesData) in filteredUNAvailableServices" :key="UnavailableServicesData">
                                            
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

                        </div><!--horizontal position-->    
                        
                </div>
            </div><!---available section-->



          








</div>
</template>





<script>
import {firebase,db} from '../../../firebaseConfig.js'

export default {
    name: 'ManageServices_View',
    data(){
        return{
    
            AvailableServices:[],
            UnavailableServices:[],

        }
    },




    created(){
        let self = this;   
        
      this.filteredAvailableServices
      this.filteredUNAvailableServices


          db.collection('services').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data().schedule)
                
                const data ={
                   'owner_id': doc.data().owner_id,
                   'user_id': doc.data().user_id,
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price': doc.data().price,
                   'schedule': doc.data().schedule,
                   'availability': doc.data().availability,
                   'url_name': doc.data().url_name,
                   'service_id': doc.data().service_id,
                 }

                 if(doc.data().availability == true){
                   self.AvailableServices.push(data)
                 }
                 else{
                   self.UnavailableServices.push(data)
                 }

            })  
        })
        
            
    },


  computed: {
    filteredAvailableServices: function() {
        let result = this.AvailableServices
          return result
    },
    filteredUNAvailableServices: function() {
        let result = this.UnavailableServices
          return result
    }   

  },





}
</script>
