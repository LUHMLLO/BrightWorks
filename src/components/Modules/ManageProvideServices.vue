<template>
<div>





            <div id="available-section" class="global-section">
                <h4>Available services</h4>
                <div class="global-grid">
                    
                    <div class="global-service-card mdl-shadow--3dp"   v-for="(service,servicesData) in services" :key="servicesData">
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
                    
                    <div class="global-service-card mdl-shadow--3dp"   v-for="(service,servicesData) in services" :key="servicesData">
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
import {db} from '../../firebaseConfig.js'

export default {
    name: 'ManageProvideServices',
    data(){
        return{

            newserviceimg:null,
            newservicename:null,
            newservicedescription:null,
            newserviceprice:null,

            services:[],

        }
    },

    methods:{

        addService(){
            db.collection('services').add({
                img: this.newserviceimg,
                name: this.newservicename,
                description: this.newservicedescription,
                price: this.newserviceprice,
            })
            .catch(error => alert(error))
        }

    },

    created(){
        let self = this;  

          db.collection('services').orderBy('name').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data().name) 
                 const data ={
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price': doc.data().price
                 }
                   self.services.push(data)
  
            })
          });
    }


}
</script>
