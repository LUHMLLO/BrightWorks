<template>
<div>

      <div id="asd-section" class="global-section">
              <h4>Add a new service</h4>
              
              <form @submit.prevent>
                  <div class="global-grid">
                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="img" id="" v-model="img" placeholder="img (url only)" required>
                        </div><!--global floating input-->

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="url" id="" v-model="url" placeholder="url name (easily url typing)" required>
                        </div><!--global floating input-->                         
        
                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="name" id="" v-model="name" placeholder="name" required>
                        </div><!--global floating input-->                

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="description" id="" v-model="description" placeholder="description" required>
                        </div><!--global floating input-->
        
                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="number" name="price" id="" v-model="price" placeholder="price" required>
                        </div><!--global floating input-->  

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="schedule" id="" v-model="schedule" placeholder="schedule" required>
                        </div><!--global floating input-->

                  </div><!--global grid-->

                  
                  
                  <br><br>
                  <button class="global-button" v-on:click="addService">Add new service</button>
                  

              </form>
              
            </div><!---available section-->

</div>
</template>

<script>
import {firebase,db} from '../../../firebaseConfig.js'
import Swal from 'sweetalert'

export default {
    name:'ManageServices_Add',
    data(){
        return{

            owner_id:firebase.auth().currentUser.uid,
            service_id:null,

            name:null,
            img:null,
            description:null,
            url:null,
            price:null,
            schedule: null,

        }
    }
    ,
    methods: {
        addService(){
            let self = this;
            db.collection('services').add({
                owner_id: this.owner_id,
                img: this.img,
                name: this.name,
                description: this.description,
                price: this.price,
                schedule: this.schedule,
                availability: true,
                url_name: this.url,
            })
            .then(function(docRef) {
                
                db.collection('services').doc(docRef.id).set({
                service_id: docRef.id,
                owner_id: self.owner_id,
                img: self.img,
                name: self.name,
                description: self.description,
                price: self.price,
                schedule: self.schedule,
                availability: true,
                url_name: self.url,
                })

                Swal({ title: "Congrats ! ", text: "Your service has been created", icon: "success", button: "yaas!",}).then(() => {self.$router.replace("manage_services")})
            })
            .catch(error => Swal(error))
        },
    },
}
</script>
