<template>
  <div id="home">
    <h1>Hi, Welcome home</h1>
    <h2>{{user.email}}</h2>
    <small>
      now hosted at
      <a href="https://brightworksvue.firebaseapp.com/"
      >https://brightworksvue.firebaseapp.com/</a>
    </small>
     

             <div id="available-section" class="global-section">
                <h4 v-if="accountType == 'client' && isLoggedIn">Adquired services</h4>
                <h4 v-if="accountType == 'service' && isLoggedIn">Available services</h4>
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
                            <router-link :to="{ name: 'ManageServices_Edit', params: {service_id: service.service_id}}">
                                <i class='uil uil-pen'></i>
                            </router-link>
                        </div>
                        
                    </div><!--service card-->
                </div>
            </div><!---available section-->

        

            <button class="global-button">
              <router-link to="/search" v-if="accountType == 'service' && isLoggedIn">
                <a >Create a new service</a>
            </router-link>
            </button>

            <button class="global-button">
              <router-link to="/search" v-if="accountType == 'client' && isLoggedIn">
                <a >Adquire a new service</a>
            </router-link>
            </button>
            
  </div>
       
</template>

<script>

import firebase from "firebase";
import {db} from '../firebaseConfig.js'
export default {
  name: "Home",
  data() {
    return {
      user: firebase.auth().currentUser,
      AvailableServices:[],
      UnavailableServices:[],
      services: [],
      isLoggedIn: false,
      accountType:null,

    };
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

        if(firebase.auth().currentUser){
        this.isLoggedIn = true
        this.currentUser = firebase.auth().currentUser.email


        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {           
                //console.log('Document data:', snapshot.data().AccountType);
                    if(snapshot.data().img == ''){
                        self.userimg = 'https://cdn.dribbble.com/users/937082/screenshots/5516643/blob'
                    }
                    else{
                        self.userimg = snapshot.data().img
                    }

                    self.user_id = snapshot.data().user_id

                    self.accountType = snapshot.data().AccountType
        })

    }
    else{
      this.isLoggedIn = false
    }
    },

  
};
</script>

<style scoped>

  .userORservice{
    width:300px;
    margin: 22px;
    align-self: middle;
    justify-self: center;
  }
  .userORserviceIMG{
    border-radius:100px; 
    overflow:hidden; 
    width:200px; 
    height:200px;
    margin:auto;
  }
  .userORserviceIMG img{
    width: 100%;
    height: 100%;
  }
  .userORservice h4{
    margin:auto;
    padding:22px 0;
  }
</style>
