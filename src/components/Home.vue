<template>
<div id="home">


<div id="welcome-wrapper">


  <div id="welcome-wrapper-background">
    <img v-bind:src="userimg">
  </div>

 
   <div id="welcome" class="mdl-shadow--16dp">
       

       <h1>Welcome to bright works</h1>
       <br>

       <p>we are preparing everything for you.</p>
       <br><br>


              <router-link :to="{ name: 'dashboard_C', params: {userid: user_id}}"  v-if="accountType == 'client'" class="welcome-a">
                <p>click when you feel ready go</p>
              </router-link>

               <router-link :to="{ name: 'dashboard_S', params: {userid: user_id}}"  v-if="accountType == 'service'" class="welcome-a">
                <p>click when you feel ready go</p>
              </router-link>             

       
     


   </div><!---weloome-->



</div><!---welcome wrapper-->

</div>      
</template>








<script>
import {firebase, db} from '../firebaseConfig.js'

export default {
  name: "Home",
  data() {
    return {
    
      userimg:null,
      accountType:null,
      user_id:null,

    }
  },



created(){
  let self = this;



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



},

mounted(){
  let self = this;



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



},



} 
</script>

<style scoped>


#welcome-wrapper{
  width:100%;
  min-height: 100vh;
  background:white;
  padding:44px;
  display: flex;
  justify-content: center;
    flex-direction: column;
}

#welcome{
  min-width: 300px;
  max-width:1080px;
  margin: auto;
  align-self: middle;
  background: #69A2F2;
  border-radius:12px;
  padding:100px;
  color:white;
  text-shadow: 0 0 22px rgba(0,0,0,0.3);
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
}


.welcome-a{
  border: solid white 0.5px !important;
  color: white !important;
  width:300px;
  margin: auto;
  border-radius:100px;
  align-content: center;
  justify-content: center;
  display: flex;
}
.welcome-a p{
  margin: auto;
  align-self: middle;
  padding:10px;
}


#welcome-wrapper-background{
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100vh;
  filter: blur(12px);
  transform: scale(1.1);
  object-fit: cover !important;
}
#welcome-wrapper-background img{
  width: 100%;
  height: 100%;
  object-fit: cover !important;
}

</style>