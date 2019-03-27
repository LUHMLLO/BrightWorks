<template>
<div>





            <div id="available-section" class="global-section">
                <h4>Available services</h4>
                <div class="global-grid">
                    
                    <div class="global-service-card mdl-shadow--3dp"   v-for="(service,AvailableServicesData) in AvailableServices" :key="AvailableServicesData">
                        <div class="global-service-card-img">
                            <img v-bind:src="service.img">
                        </div><!-- global service card img-->

                        <div class="global-service-card-content">
                            <div class="global-service-card-name">
                                <h4>{{service.name}}</h4>
                            </div>
                            <div class="global-service-card-description">
                                <p>{{service.description}}</p>
                                <p>{{service.schedule}}</p>
                                <small>{{service.price}}</small>
                            </div>
                        </div><!---global service card content -->

                        <div class="global-service-card-edit-button">
                            <router-link :to="{ name: 'ManageServices_Edit', params: {url_name: service.url_name}}">
                                <i class='uil uil-pen'></i>
                            </router-link>
                        </div>
                        
                    </div><!--service card-->
                </div>
            </div><!---available section-->


            


            <div id="unavailable-section" class="global-section">
                <h4>Not available services</h4>
                <div class="global-grid">
                    
                    <div class="global-service-card mdl-shadow--3dp"   v-for="(service,UnavailableServicesData) in UnavailableServices" :key="UnavailableServicesData">
                        <div class="global-service-card-img">
                            <img v-bind:src="service.img">
                         </div><!-- global service card img-->
                        <div class="global-service-card-content">
                            <div class="global-service-card-name">
                                <h4>{{service.name}}</h4>
                            </div>
                            <div class="global-service-card-description">
                                <p>{{service.description}}</p>
                                <p>{{service.schedule}}</p>
                                <small>{{service.price}}</small>
                            </div>
                        </div><!---global service card content -->
                        <div class="global-service-card-edit-button">
                            <router-link :to="{ name: 'ManageServices_Edit', params: {url_name: service.url_name}}">
                                <i class='uil uil-pen'></i>
                            </router-link>
                        </div>                        
                    </div><!--service card-->
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



}
</script>
