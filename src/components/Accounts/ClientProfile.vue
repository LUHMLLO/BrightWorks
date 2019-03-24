<template>
<div>



          <div class="global-header mdl-shadow--2dp">

          <div class="global-header-bg">
              <img v-bind:src="userimg">
          </div>

          <div class="global-header-bg-overlay"></div>

          <div class="global-header-img mdl-shadow--2dp">
              <img v-bind:src="userimg">
          </div>


          <h3 class="global-header-title">{{username}}</h3>
          

      </div><!--header-->



       <div class="global-tabs-bar">

           <button class="mdl-button global-button-round sombra">timeline</button>
           <button class="mdl-button global-button-round sombra">About</button>
           <button class="mdl-button global-button-round sombra">Services</button>
           <button class="mdl-button global-button-round sombra">Contact</button>
           <button class="mdl-button global-button-round sombra">Reviews</button>
           <button class="mdl-button global-button-round sombra">Portfolio</button>

       </div><!---options bar-->





</div>
</template>


<script>
import { firebase, db } from '../../firebaseConfig.js'
import Swal from 'sweetalert'

export default {
    name: 'ClientProfile',
    data(){
        return{

            username:null,
            userimg:null,
            useremail:null,
            userphone:null,

            
        }
    },
    
    
    
    
    
    created(){
             
             let self = this; 
             
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {                       
                    if(snapshot.data().img == ''){
                        self.userimg = 'https://cdn.dribbble.com/users/937082/screenshots/5516643/blob'
                    }
                    else{
                        self.userimg = snapshot.data().img
                    }

                    self.username = snapshot.data().name
                    self.userphone = snapshot.data().phone
                    self.useremail = snapshot.data().email  
                    
                    if(snapshot.data().AccountType !== 'client'){
                        Swal({ title: "You Shall Not Pass!" , text: "yes, this is kind of a breach, yes we are going to patch this, now go surf somewhere else.", icon: "warning", button: "guess i'll leave",}).then(() => { self.$router.replace('/home') })
                    } 
        })
        
    }








}
</script>
