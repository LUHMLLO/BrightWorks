<template>
<div id="home">


    <div class="home-dashboard-panels-headers">
              <h3>Latest reviews</h3>
              <button class="mdl-button" v-on:click="hideReviews" v-if="IsReviewsVisible"><i class='uil uil-angle-up'></i></button>
              <button class="mdl-button" v-on:click="showReviews" v-if="!IsReviewsVisible"><i class='uil uil-angle-down'></i></button>              
              <button class="global-button">action</button>
    </div>  
  <div class="global-horizontal-scroll" v-if="IsReviewsVisible">      
      <div class="global-horizontal-position"  v-for="(topCard,topCardsData) in topCards" :key="topCardsData">
        
        <div class="global-minimal-card mdl-shadow--2dp">

          <div class="global-minimal-card-header">
                <div class="global-minimal-card-img mdl-shadow--2dp">
                  <img src="https://cdn.dribbble.com/users/418188/screenshots/6005129/information_architecture_illustration_tubik.png">
                </div>       

                <h3>user name</h3>     
          </div>

          <div class="global-minimal-card-content">
            
            <p>{{topCard.something}}</p>

          </div>
        </div><!--global minimsl small--->

      </div><!--global--horizontal position-->

  </div><!---global-grid ends here-->
  <br><br>


   



   <div id="dashboard" class="global-grid">


      
          <div id="stadistics" class="global-col">
            <div class="home-dashboard-panels-headers">
              <h3>A significant module in here</h3>
              <button class="mdl-button" v-on:click="hidethispanel" v-if="IsPanelVisible"><i class='uil uil-angle-up'></i></button>
              <button class="mdl-button" v-on:click="showthispanel" v-if="!IsPanelVisible"><i class='uil uil-angle-down'></i></button>              
              <button class="global-button">action</button>
            </div>
            <div style="width:100%; height:400px; overflow:hidden;" v-if="IsPanelVisible">
                <img src="https://cdn.dribbble.com/users/4368/screenshots/4540715/down.png" style="width:100%; height:100%;">
              </div>
          </div><!---------->


          <div id="activeServices" class="global-col">
            
            <div class="home-dashboard-panels-headers">
              <h3>Services</h3>
              <button class="mdl-button" v-on:click="hideServices" v-if="IsServicesVisible"><i class='uil uil-angle-up'></i></button>
              <button class="mdl-button" v-on:click="showServices" v-if="!IsServicesVisible"><i class='uil uil-angle-down'></i></button>
              <button class="global-button" v-on:click="addNewServiceFromHome"><i class='uil uil-plus'></i></button>
            </div>

            <div v-if="IsServicesVisible">

                <div id="viewActiveServicesHome" class="global-container global-grid" v-if="!addingNewService">

                    <div class="global-box mdl-shadow--2dp" v-for="(service,activeServicesData) in activeServices" :key="activeServicesData">
                      
                      <div class="global-box-header">
                          <div class="global-box-img mdl-shadow--2dp">
                            <img v-bind:src="service.img">
                          </div>
                          <div class="global-box-header-title">
                            <h3>{{service.name}}</h3>
                          </div>
                          <router-link :to="{ name: 'ManageServices_Edit', params: {service_id: service.service_id}}" class="global-box-header-action">
                            <i class='uil uil-pen'></i>
                          </router-link> 
                      </div><!--global-box header-->

                      <div class="global-box-content">
                        <p class="global-box-content-description">{{service.description}}</p>
                      </div>
                      
                  
                    </div><!---global box--->

                </div>
                <div id="addNewServicesHome" class="global-container" v-if="addingNewService">
                  <h3>here its gonna be the crud</h3>
                  <button class="global-button" v-on:click="addNewServiceFromHomeFinish">okay</button>
                </div>
 
            </div>
          </div><!---------->


          <div id="HomeTasksList" class="global-col">
            <div class="home-dashboard-panels-headers">
              <h3>Tasks</h3>
              <button class="mdl-button" v-on:click="hideTasks" v-if="IsTaskVisible"><i class='uil uil-angle-up'></i></button>
              <button class="mdl-button" v-on:click="showTasks" v-if="!IsTaskVisible"><i class='uil uil-angle-down'></i></button>              
              <button class="global-button"><i class='uil uil-plus'></i></button>
            </div>
            <div class="global-container global-grid" v-if="IsTaskVisible">
            
              <div class="tasks-card mdl-shadow--2dp" v-for="(task,TaskListHomeData) in TaskListHome" :key="TaskListHomeData">
                <i class='uil uil-circle'></i>
                <div class="task-card-content">
                  <span>{{task.task}}</span>
                </div>
                <i class='uil uil-check-square'></i>
              </div>
            
            </div>
          </div><!---------->



      </div><!---global grid-->
      <br><br><br><br><br>














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
      TaskListHome:[
        {'task':'here goes your task'},
        {'task':'here goes your to do'},
        {'task':'yes this is a list'},
        {'task':'this is a longer text inside a task just to see how it looks inside this div , if u know what i mean, this text is completely for testing only'},
      ],


      addingNewService:false,
      IsPanelVisible:true,

      IsReviewsVisible:true,
      IsServicesVisible:true,
      IsTaskVisible:true,
    
    
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
        this.IsPanelVisible = true
      },
      addNewServiceFromHomeFinish:function(){
        this.addingNewService = false
      },



      hidethispanel: function(){
        this.IsPanelVisible = false
      },
      showthispanel: function(){
        this.IsPanelVisible = true
      },


      hideServices: function(){
        this.IsServicesVisible = false
      },
      showServices: function(){
        this.IsServicesVisible = true
      },

      hideTasks: function(){
        this.IsTaskVisible = false
      },
      showTasks: function(){
        this.IsTaskVisible = true
      },

      hideReviews: function(){
        this.IsReviewsVisible = false
      },
      showReviews: function(){
        this.IsReviewsVisible = true
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
#activeServices,#HomeTasksList{
  width:800px;
  min-width:360px;
  margin: 12px auto;
}


</style>
