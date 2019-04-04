<template>
<div>

      <div id="asd-section" class="global-section">
              <h4>Add a new service</h4>
              
              <form @submit.prevent>
                  <div class="global-grid">
                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="url" name="img" id="" v-model="img" placeholder="img (url only)" required>
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
                            <input type="text" name="schedule" id="" v-model="time_start" placeholder="start hour" required>
                        </div><!--global floating input-->

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="schedule_end" id="" v-model="time_end" placeholder="end hour" required>
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
            time_start:null,
            time_end:null,
            availability:true,

        }
    }
    ,
    methods: {
        addService(){
            let self = this;
            db.collection('services').add({
            })
            .then(function(docRef) {
                
                db.collection('services').doc(docRef.id).set({
                service_id: docRef.id,
                owner_id: self.owner_id,
                img: self.img,
                name: self.name,
                description: self.description,
                time_start: self.time_start,
                time_end: self.time_end,
                availability: true,
                })

                Swal({ title: "Congrats ! ", text: "Your service has been created", icon: "success", button: "nice!",}).then(() => {self.$router.go("manage_services")})
            })
            .catch(error => Swal(error))
        },

        stripTheGarbage(e) {
      if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
        e.preventDefault()
      }
    },

    formatDollars() {
            if (this.price != '') {
                    var num = this.price;
                    
                    num = Number(num);
                            
                    var countDecimals = function (value) {
                    if(Math.floor(value) === value) return 0;
                    return value.toString().split(".")[1].length || 0; 
                    }
                    
                    var decimal = countDecimals(num);
                    
                    if (decimal < 2) {
                    num = num.toFixed(2)
                    }
                    
                    if (decimal > 2) {
                    num = num.toFixed(decimal)
                    }
                    
                    if (parseInt(num) < 1) {
                    num = "." + String(num).split(".")[1];
                    }

                    this.price = num;
                }
            }
    },
}
</script>
