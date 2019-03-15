<template>
<div id="signup">
<form method="post" v-on:submit.prevent>




  

    <div class="floaties mdl-shadow--2dp">
        <router-link to="/login">
          <button class="mdl-button">I already have an account</button>
          <br>
            <p>{{email}}</p>
            <p>{{password}}</p>
            <p>{{name}}</p>
            <p>{{phone}}</p>
        </router-link>
    </div>





   <div id="form01" class="form-container"  :class="{ 'hidden': !NotSignedUpYet }">
     <div class="form-box mdl-shadow--16dp">
       <h1>Sign up</h1>

      <div class="input-container">
        <i class='uil uil-envelope-alt'></i><input type="text" name="email" id="email" v-model="email" placeholder="email" /> 
      </div>
      <div class="input-container">
        <i class='uil uil-keyhole-square'></i><input type="password" name="password" id="password" v-model="password" placeholder="password" />
      </div>


       <br>

       <button @click="NotSignedUpYet = false" class="mdl-button">Sign up</button>

       <br><br>
    </div>
   </div>










   <div id="form02" class="form-container"  :class="{ 'hidden': NotSignedUpYet }">
     <div class="form-box mdl-shadow--16dp">
       <h3>Welcome to Bright Works</h3>
       <h6>Let's setup your account so you can go surf</h6>
       <br>

      <div class="input-container">
        <i class='uil uil-user'></i><input type="text" name="name" id="name" v-model="name" placeholder="name" required/> 
      </div>
      <div class="input-container">
        <i class='uil uil-mobile-android'></i><input type="text" name="phone" id="phone" v-model="phone" placeholder="phone" required/>
      </div>
      <br><br>
      <div class="mdl-grid">
          <div class="account-type mdl-shadow--2dp mdl-button">
              <i class='uil uil-shop'></i>
              <p>Service</p>
          </div>
          <div class="account-type mdl-shadow--2dp mdl-button">
              <i class='uil uil-shopping-basket'></i>
              <p>Client</p>
          </div>
      </div>


       <br><br>

        <button @click="signUp" class="mdl-button">Finish Setup</button>

       <br>

    </div>    
   </div>











</form>
</div>
</template>

<script>
import firebase from 'firebase'
const firebaseInit = require('../../firebaseInit.js')
const db = firebase.firestore()
import Swal from 'sweetalert'


export default {
  name: "Signup",
  data() {
    return {
      
      email: null,
      password: null,
      name: null,
      phone: null,

      NotSignedUpYet: true,


    }
  },

  
  methods:{
    signUp: function(){
      firebaseInit.auth.createUserWithEmailAndPassword(this.email, this.password).then(
        (credentials) => { 


          return db.collection('users').doc(credentials.user.uid).set({
            name: this.name,
            phone: this.phone,

          }).then(() =>{
              Swal({ title: "Congrats ! ", text: "Your account has been created", icon: "success", button: "let's goo!",}).then(() => {this.$router.replace("home")})
          })





        },
        (err) => {
          Swal({ title: "Oops !", text: err.message, icon: "error", button: "let's try again",});
        }
      );
    }



  },



}
</script>


<style scoped>

  #form01{
    background: url("https://cdn.dribbble.com/users/63407/screenshots/5834137/dribbble_tea_haytruck.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: inset 0 0 100px 2200px rgba(0, 0, 0, 0.5);
    align-content: middle;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding:22px;
  }

  #form02{
    background: url("https://cdn.dribbble.com/users/1803663/screenshots/5665285/home.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: inset 0 0 100px 2200px rgba(0, 0, 0, 0.5);
    align-content: middle;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding:22px;
  }

  .form-box{
    align-self: middle;
    margin:auto;
    width:500px;
    background: white;
    border-radius:10px;
    padding:22px;
  }
  .input-container{
    width: 76%;
    display: flex;
    margin:22px auto 22px auto;
    align-content: middle;
    justify-content: space-between;
    border-bottom: solid thin rgba(0, 0, 0, 0.5); 
    padding:18px 0px;
  }

  .mdl-button{
    border-radius:100px;
    margin:22px auto 22px auto;
  }

  input{
    border:none;
    outline:none;
    width:80%;
  }
  input::placeholder{
    text-align: left;
  }
  i,input,button{
    display: inline-block;
    margin:auto;
    align-self: middle;
  }
  i{
    font-size:22px;
    width: 10%;
  }


   .floaties{
     position:fixed;
     top:0;
     right:0;
     background:white;
     padding:22px;
     border-radius: 10px;
     margin: 50px 100px auto auto;
   }


 .account-type{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-content: middle;
       padding:32px;
       margin:auto 10px auto 10px;
       width:130px;
       height: auto;
       border-radius:5px;
   }
   .account-type i,p{
       display: block;
       margin:auto;
       align-self: middle;
       width:100%;
       padding:5px 0px;
   }

   .hiddem {
     display: none;
   }
</style>

