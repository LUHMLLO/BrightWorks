<template>
<div>


      <div class="global-header mdl-shadow--2dp">

          <div class="global-header-bg">
              <img v-bind:src="img">
          </div>

          <div class="global-header-bg-overlay"></div>

          <div class="global-header-img mdl-shadow--2dp">
              <img v-bind:src="img">
          </div>


          <h3 class="global-header-title">{{name}}</h3>
          

      </div><!--header-->


            <div id="asd-section" class="global-section">
                        <h4>Edit or delete this service</h4>
                        
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
                                    
                                    <div class="global-floating-input">
                                        <div v-if="ServiceIsEnable" v-on:click="DisableService"  style="cursor:pointer;"><i class='uil uil-toggle-on'></i><span>available</span></div>
                                        <div v-if="ServiceIsDisable" v-on:click="EnableService"  style="cursor:pointer;"><i class='uil uil-toggle-off'></i><span>disabled</span></div>
                                    </div><!--global floating input-->


                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="phone" id="" v-model="phone" placeholder="phone" required>
                        </div><!--global floating input--> 

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="email" id="" v-model="email" placeholder="email" required>
                        </div><!--global floating input--> 

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="location" id="" v-model="location" placeholder="location" required>
                        </div><!--global floating input--> 

                        <div class="global-floating-input">
                            <i class='uil uil-file-blank'></i>
                            <input type="text" name="video" id="" v-model="video" placeholder="video about this service" required>
                        </div><!--global floating input--> 

                            </div><!--global grid-->

                            
                            
                            <br><br>
                            <button class="global-button" v-on:click="goBackCancelEdit">Cancel</button>
                            <button class="global-button" v-on:click="saveChangesForThisService">Save changes</button>
                            <button class="global-button" v-on:click="DeleteThisService">Delete</button>
                            

                        </form>
                        
                        </div><!---available section-->









</div>
</template>

<script>
import {db} from '../../../firebaseConfig.js'
import Swal from 'sweetalert'
export default {
    name: 'ManageServices_Edit',
    data(){
        return{


            service_id:null,
            name:null,
            img:null,
            description:null,
            time_start:null,
            time_end:null,
            availability:null,
            ServiceIsEnable:null,
            ServiceIsDisable:null,
            phone:null,
            email:null,
            location:null,
            video:null,
            
            
        }
    },





    beforeRouteEnter( to, from, next){        
          db.collection('services').where('service_id' , '==' , to.params.service_id).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              next(vm => {
                    vm.img = doc.data().img
                    vm.name = doc.data().name
                    vm.description = doc.data().description
                    vm.time_start = doc.data().time_start
                    vm.time_end = doc.data().time_end
                    vm.availability = doc.data().availability
                    vm.service_id = doc.data().service_id
                    vm.phone = doc.data().phone
                    vm.email = doc.data().email
                    vm.location = doc.data().location
                    vm.video = doc.data().video

                    
                    //console.log(doc.data().availability)

                    if (doc.data().availability === true){
                        vm.ServiceIsEnable = true
                        vm.ServiceIsDisable = false
                    }
                    if (doc.data().availability === false){
                        vm.ServiceIsEnable = false
                        vm.ServiceIsDisable = true
                    }    

              })
            })
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
        
      fetchData (){
        db.collection('services').where('service_id', '==' , this.$route.params.service_id).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.img = doc.data().img
                    this.name = doc.data().name
                    this.description = doc.data().description
                    this.time_start = doc.data().time_start
                    this.time_end = doc.data().time_end
                    this.availability = doc.data().availability      
                    this.service_id = doc.data().service_id
                    this.phone = doc.data().phone
                    this.email = doc.data().email
                    this.location = doc.data().location
                    this.video = doc.data().video
                    
          })
        })
      },


      DeleteThisService: function(){
          Swal({ title: "Deleting service" , text: "Are you sure u want to remove this service from your list?", icon: "warning", buttons:["i changed my mind","yes, remove it"],})
          .then((deletethisservice) => {
            if(deletethisservice){
                        db.collection('services').where('service_id', '==' , this.$route.params.service_id).get().then(querySnapshot =>{
                        querySnapshot.forEach(doc => {
                            doc.ref.delete()
                            this.$router.push('/manage_services')
                        })
                        })
             }
            })
      },
      goBackCancelEdit: function() {
            this.$router.push('/manage_services')          
      },

      saveChangesForThisService: function(){
          Swal({ title: "Saving changes" , text: "Are you sure u want to save this changes?", icon: "warning", buttons:["i changed my mind","yes, save it"],})
          .then((savingChanges) => {
            if(savingChanges){
                        db.collection('services').where('service_id', '==' , this.$route.params.service_id).get().then(querySnapshot =>{
                        querySnapshot.forEach(doc => {
                            doc.ref.update({
                                name: this.name,
                                description: this.description,
                                time_start: this.time_start,
                                time_end: this.time_end,
                                img: this.img,
                                availability: this.availability,
                                phone: this.phone,
                                email: this.email,
                                location: this.location,
                                video: this.video,
                            })
                        })
                        })
             }
             this.$router.push('/manage_services')
            })          
      },


      EnableService: function(){
            this.availability = true
            this.ServiceIsEnable = true
            this.ServiceIsDisable = false
      },
      DisableService: function(){
            this.availability = false
            this.ServiceIsEnable = false
            this.ServiceIsDisable = true
      },

      stripTheGarbage(e) {
      if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
        e.preventDefault()
      }
    },



            

      


    },




    
}
</script>
