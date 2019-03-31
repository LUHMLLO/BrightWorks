<template>
<div id="home">


  <h3 class="global-horizontal-scroll-title">Latest reviews</h3>
  <div class="global-horizontal-scroll">      
      <div class="global-horizontal-position"  v-for="(topCard,topCardsData) in topCards" :key="topCardsData">
        <div class="global-card-small mdl-shadow--2dp">
          <div class="global-img-small mdl-shadow--2dp">
            <img src="https://cdn.dribbble.com/users/418188/screenshots/6005129/information_architecture_illustration_tubik.png">
          </div>
          <div class="global-card-content">
            <h3>user name</h3>
            <p>{{topCard.something}}</p>

          </div>
        </div><!--global caard small--->
      </div>

  </div><!---global-grid ends here-->
  <br><br>


   



   <div id="dashboard" class="global-grid">


      
          <div id="stadistics" class="global-col">
            <div class="home-dashboard-panels-headers">
              <h3>A significant module in here</h3><button class="global-button">action</button>
            </div>
            <div style="width:100%; height:400px; overflow:hidden;">
                <img src="https://cdn.dribbble.com/users/4368/screenshots/4540715/down.png" style="width:100%; height:100%;">
              </div>
          </div><!---------->


          <div id="activeServices" class="global-col">
            
            <div class="home-dashboard-panels-headers">
              <h3>Services</h3><button class="global-button" v-on:click="addNewServiceFromHome">Add</button>
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




     <div class="global-grid">

       
       <div id="tasks">
         <h3>tasks</h3>

       </div>


       <div id="">
         <h3>modulenamehere</h3>

       </div>


       <div id="">
         <h3>modulenamehere</h3>

       </div>

     </div><!--global--grid-->










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
  padding:22px;
  border-bottom: solid 0.5px rgba(0,0,0,0.3);
  width:97%;
  margin: auto auto 12px auto;
  display: flex;
  justify-content: space-between;
}
.home-dashboard-panels-headers h3{
  font-size:20px !important;
  text-align: left;
}
.home-dashboard-panels-headers h3,button{
  margin:auto;
  align-self: middle;
  display: inline-block;
}
#stadistics{
  width:100%;
  margin: 12px auto;
}
#activeServices,#somethingidk{
  width:800px;
  min-width:360px;
  margin: 12px auto;
}


</style>
