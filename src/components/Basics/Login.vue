<template>
<div id="login">


   <form id="form01" class="form-container" method="post" v-on:submit.prevent v-if="form01">
     <div class="form-box mdl-shadow--16dp">
       
       <div class="go-to-tab">
         <router-link to="/login" class="go-to-tab-active"> SignIn </router-link>
         <router-link to="/signup" class="go-to-tab-inactive"> SignUp </router-link>
       </div>

       
       
       <h1>Log in</h1>

      <div class="input-container">
        <i class='uil uil-envelope-alt'></i><input type="text" name="email" id="email" v-model="email" placeholder="email" required/> 
      </div>
      <div class="input-container">
        <i class='uil uil-keyhole-square'></i><input type="password" name="password" id="password" v-model="password" placeholder="password" required/>
      </div>


       <br>

       <button v-on:click="logIn" class="mdl-button sombra">Sign in</button>
       
       <br>

       <a v-on:click="showForm02" style="cursor:pointer;">forgot your password ?</a>
       <br><br>
    </div>
   </form><!--fomr box -->





   <form id="form02" class="form-container" method="post" v-on:submit.prevent v-if="form02">
     <div class="form-box mdl-shadow--16dp">       
       
       <h1>Forgot my password</h1>

      <div class="input-container">
        <i class='uil uil-envelope-alt'></i><input type="text" name="email" id="emailAddress" v-model="email" placeholder="email" required/> 
      </div>


       <br>

       <button v-on:click="forgotPassword" class="mdl-button sombra">Send password reset email</button>
       
       <br>
    </div><!--fomr box -->  
   </form>





</div>
</template>

<script>
import firebase from '../../firebaseConfig.js'
import Swal from 'sweetalert'

export default {
  name: "Login",
  data() {
    return {
      
      email:'',
      password:'',

      form01: true,
      form02: false,


      emailAddress:'',


    }
  },

  
  methods:{

    logIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          Swal({ title: "Welcome back !" , text: "we miss you", icon: "success", button: "helloo!",}).then(() => {
            this.$router.replace("home")
          })
        },
        (err) =>{
          Swal({ title: "Oops !", text: err.message, icon: "error"})
        }
      );
    },

    forgotPassword: function(){
      let emailAddress = this.email
      let self = this;
      firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
          Swal({ title: "Check your email!" , text: "we sent you an email with the steps to recover your account", icon: "success", button: "thanks!",}).then(() => {
            self.$router.go("login")
            self.form01 = true
            self.form02 = false
          })
        }).catch(function(error) {
          Swal({ title: "Oops !", text: error.message, icon: "error"})
          });
    },

    showForm02: function(){
      this.form01 = false
      this.form02 = true
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
    background: url("https://cdn.dribbble.com/users/902546/screenshots/5815440/on-dribble1.png");
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
    overflow: hidden;
    padding-bottom:22px;
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
  h1{
    padding: 22px 0;
    margin: 22px 0;
  }


  .go-to-tab{
    margin:auto;
    width:100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .go-to-tab a{
    padding:22px;
    width:100%;
    text-decoration: none !important;
    color:#333;
    outline:none !important;
    border:none !important;
    cursor: pointer;
  }
  .go-to-tab a:focus{
    outline:none !important;
    border:none !important;
  }
  .go-to-tab-active{
    background:white;
  }
  .go-to-tab-inactive{
    background: rgba(180,180,180,1);
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }


</style>
