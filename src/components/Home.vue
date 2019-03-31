<template>
<div id="home">


  <div class="global-horizontal-scroll">
    <h3>Latest reviews</h3>
    <div class="global-card-small mdl-shadow--2dp global-horizontal-position" v-for="(topCard,topCardsData) in topCards" :key="topCardsData">
      <i class='uil uil-chart-pie'></i>
      <p>{{topCard.something}}</p>
    </div>
  </div><!---global-grid ends here-->


   



   <div id="dashboard" class="global-grid">


      
          <div id="stadistics" class="global-col">
            <div class="home-dashboard-panels-headers">
              <h3>Stadistics</h3><button class="global-button">action</button>
            </div>
          </div><!---------->


          <div id="activeServices" class="global-col">
            
            <div class="home-dashboard-panels-headers">
              <h3>Services</h3><button class="global-button" v-on:click="addNewServiceFromHome">new service</button>
            </div>

            <div id="viewActiveServicesHome" class="global-container global-grid" v-if="!addingNewService">

                 <div class="global-item-preview-rectangle mdl-shadow--2dp" v-for="(service,activeServicesData) in activeServices" :key="activeServicesData">
                   <div class="global-item-preview-rectangle-img mdl-shadow--2dp">
                     <img v-bind:src="service.img">
                   </div>
                   <div class="global-item-preview-rectangle-content">
                     <h3>{{service.name}}</h3>
                     <p>{{service.description}}</p>
                   </div>
                  
                  <router-link :to="{ name: 'ManageServices_Edit', params: {service_id: service.service_id}}">
                    <i class='uil uil-pen'></i>
                  </router-link>                
                 </div><!---->

            </div>
            <div id="addNewServicesHome" class="global-container" v-if="addingNewService">
              <h3>here its gonna be the crud</h3>
              <button class="global-button" v-on:click="addNewServiceFromHomeFinish">okay</button>
            </div>
          </div><!---------->


          <div id="somethingidk" class="global-col">
            <div class="home-dashboard-panels-headers">
              <h3>module title here</h3><button class="global-button">action</button>
            </div>
          </div><!---------->



      </div><!---global grid-->







</div>      
</template>

<script>
import {firebase, db} from '../firebaseConfig.js'

export default {
  name: "Home",
  data() {
    return {

      topCards:[
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},       
      ],

      activeServices:[],


      addingNewService:false,
    
    
    }
  },







  created(){
        let self = this;

          db.collection('services').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data().schedule)
                
                const data ={
                  
                   'service_id': doc.data().service_id,
                   'owner_id': doc.data().owner_id,
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price': doc.data().price,
                   'schedule': doc.data().schedule,
                   'availability': doc.data().availability,
                   'url_name': doc.data().url_name,
                 }

                 if(doc.data().availability == true){
                   self.activeServices.push(data)
                 }

            })  
        })
    },


    methods:{
      addNewServiceFromHome:function(){
        this.addingNewService = true
      },
      addNewServiceFromHomeFinish:function(){
        this.addingNewService = false
      }
    }









} 
</script>

<style scoped>
#dashboard{
  width: 96%;
  margin: auto;
}
.home-dashboard-panels-headers{
  padding:22px 22px 52px 22px;
  border-bottom: solid 0.5px rgba(0,0,0,0.3);
  width:97%;
  margin: auto auto 12px auto;
}
.home-dashboard-panels-headers h3{
  font-size:26px !important;
  float: left;
}
.home-dashboard-panels-headers button{
  float: right;
}
#stadistics{
  width:100%;
  margin: 12px auto;
}
#activeServices,#somethingidk{
  width:50%;
  min-width:300px;
  margin: 12px auto;
}


</style>
