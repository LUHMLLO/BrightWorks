<template>
<div>


           <div class="global-grid">
             
             
             
              <div class="global-search-result" v-for="(service,servicesData) in services" v-bind:key="servicesData">
                <router-link :to="{ name: 'Service', params: {service_id: service.service_id || 404}}">
                        <div class="global-search-result-img mdl-shadow--2dp">
                          <img v-bind:src="service.img || 'https://cdn.dribbble.com/users/1047810/screenshots/4739092/2.png'"/>
                        </div>
                    <div class="global-search-result-text mdl-shadow--2dp">
                      <h3>{{service.name}}</h3>
                      <p>{{service.description}}</p>
                    </div><!---content--->
                </router-link>
              </div><!---global-search-result--->

             

           </div><!--serach content-->



</div>
</template>



<script>
import { db } from '../../../firebaseConfig.js'
export default {
    name:'provider',
    props:['provider'],
    data(){
        return{

      services:[],


        }
    },




  created(){
         let self = this;  

          db.collection('services').where('owner_id', '==', this.$props.provider).get().then((querySnapshot) => {
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



}
</script>

