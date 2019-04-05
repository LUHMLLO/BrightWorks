<template>
<div id="login">


   <form class="form-container" method="post" v-on:submit.prevent>
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

       <button @click="logIn" class="mdl-button sombra">Sign in</button>
       
       <br>

       <a><button @click="restorePassword">forgot your password ?</button> </a>
       <br><br>
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

    

  },

}
</script>


<style scoped>

  
  form{
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
