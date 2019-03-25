<template>
  <div id="home">
    <h1>Hi, Welcome home</h1>
    <h2>{{user.email}}</h2>
    <small>
      now hosted at
      <a href="https://brightworksvue.firebaseapp.com/"
      >https://brightworksvue.firebaseapp.com/</a>
    </small>
     <div id="unavailable-section" class="global-section">
                <h4>Adquired services</h4>
                <div class="global-grid">
                    
                    <div class="global-service-card mdl-shadow--3dp"   v-for="(service,servicesData) in services" :key="servicesData">
                        <div class="global-service-card-img">
                            <img src="https://cdn.dribbble.com/users/63407/screenshots/5462636/dribbble_taxi_cab_ride.png">
                        </div><!-- global service card img-->
                        <div class="global-service-card-content">
                            <div class="global-service-card-name">
                                <h4>{{service.name}}</h4>
                            </div>
                            <div class="global-service-card-description">
                                <p>{{service.description}}</p>
                            </div>
                        </div><!---global service card content -->
                    </div><!--service card-->
                </div>
            </div><!---available section-->

            <router-link to="/search">
                <a >Adquire a new service</a>
            </router-link>
  </div>
       
</template>

<script>

import firebase from "firebase";
export default {
  name: "Home",
  data() {
    return {
      user: firebase.auth().currentUser,
      service: null,
      services: [
        { name: "service name", description: "service description goes here" },
        { name: "service name", description: "service description goes here" },
        { name: "service name", description: "service description goes here" }
      ]
    };
  },

  
};
</script>

<style scoped>
</style>
