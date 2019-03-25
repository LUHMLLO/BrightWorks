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
                                <small>{{service.price}}</small>
                            </div>
                        </div><!---global service card content -->
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
                                <small>{{service.price}}</small>
                            </div>
                        </div><!---global service card content -->
                    </div><!--service card-->
                </div>
            </div><!---available section-->



            <div id="unavailable-section" class="global-section">
              <h4>Add a new service</h4>
              
              <form @submit.prevent>
                  <div class="global-grid">
                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="" id="" v-model="newserviceimg" placeholder="img (url only)" required>
                        </div><!--global floating input-->
        
                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="" id="" v-model="newservicename" placeholder="name" required>
                        </div><!--global floating input-->                

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="" id="" v-model="newservicedescription" placeholder="description" required>
                        </div><!--global floating input-->
        
                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="" id="" v-model="newserviceprice" placeholder="price" required>
                        </div><!--global floating input-->              
                  </div><!--global grid-->
                  
                  <br><br>
                  <button class="global-button" v-on:click="addService">Add new service</button>

              </form>
            </div><!---available section-->








</div>
</template>





<script>
import {firebase,db} from '../../firebaseConfig.js'

export default {
    name: 'ManageProvideServices',
    data(){
        return{

            newserviceimg:null,
            newservicename:null,
            newservicedescription:null,
            newserviceprice:null,
            owner_id:firebase.auth().currentUser.uid,
            user_id:null,
            availability:null,

            currentUserUserID:null,

            AvailableServices:[],
            UnavailableServices:[],

            thisUserRightNow:firebase.auth().currentUser.uid,

        }
    },

    methods:{

        addService(){
            db.collection('services').add({
                owner_id: this.owner_id,
                user_id: this.user_id,
                img: this.newserviceimg,
                name: this.newservicename,
                description: this.newservicedescription,
                price: this.newserviceprice,
                availability: true,
            })
            .catch(error => alert(error))
        }

    },



    created(){
        let self = this;   

          db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot){

                self.user_id = snapshot.data().user_id
                //console.log(self.user_id)

        })



          db.collection('services').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(self.user_id)
                
                const data ={
                   'owner_id': doc.data().owner_id,
                   'user_id': doc.data().user_id,
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price': doc.data().price,
                   'availability': doc.data().availability,
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
