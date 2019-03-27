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
                            <input type="text" name="url" id="" v-model="url" placeholder="url name" required>
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
                            <input type="text" name="price" id="" v-model="price" placeholder="price" required>
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
export default {
    name:'ManageServices_Add',
    data(){
        return{

            owner_id:firebase.auth().currentUser.uid,
            user_id:firebase.auth().currentUser.uid,

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
            db.collection('services').add({
                owner_id: this.owner_id,
                user_id: this.user_id,
                img: this.img,
                name: this.name,
                description: this.description,
                price: this.price,
                schedule: this.schedule,
                availability: true,
                url_name: this.url,
            })
            .catch(error => alert(error))
        },
    },
}
</script>
