<template>
<div>



        <div class="global-header mdl-shadow--2dp">

            <div class="global-header-bg">
                <img v-bind:src="userimg">
            </div>

            <div class="global-header-bg-overlay"></div>


            <div class="global-header-edit-button">
                <router-link :to="{ name: 'EditYourAccount' , params: {userid: user_id}}">
                    <i class='uil uil-pen'></i>
                </router-link>
            </div>

                <div class="global-header-img mdl-shadow--2dp">
                <img v-bind:src="userimg">
                </div>

            <h3 class="global-header-title">{{username}}</h3>
            

        </div><!--header-->



       <div class="global-tabs-bar">

           <button class="mdl-button global-button-round sombra">About</button>
           <button class="mdl-button global-button-round sombra">Adquired services</button>
           <button class="mdl-button global-button-round sombra">Subscriptions</button>
           <button class="mdl-button global-button-round sombra">Made reviews</button>

       </div><!---options bar-->





</div>
</template>


<script>
import { firebase, db } from '../../firebaseConfig.js'

export default {
    name: 'ClientProfile',
    data(){
        return{

            username:null,
            userimg:null,
            useremail:null,
            userphone:null,
            user_id:null,

            
        }
    },
    
    
    
    
    
    beforeCreate(){
             
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
                    self.user_id = snapshot.data().user_id

                    //console.log(self.user_id)
                    
                    if(snapshot.data().AccountType !== 'client'){
                      self.$router.replace('/home')
                    } 
        })
        
    }








}
</script>
