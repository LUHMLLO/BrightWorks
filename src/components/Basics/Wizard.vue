<template>
<div id="wizard">


   <form class="form-container" v-on:submit.prevent>
     <div class="form-box">
       <h3>Welcome to Bright Works</h3>
       <h6>Let's setup your account so you cant star surfing</h6>
       <br>

      <div class="input-container">
        <i class='uil uil-user'></i><input type="text" name="name" id="name" v-model="email" placeholder="name" required/> 
      </div>
      <div class="input-container">
        <i class='uil uil-mobile-android'></i><input type="text" name="phone" id="phone" v-model="password" placeholder="phone" required/>
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

       <router-link to="/home">
        <button class="mdl-button">finis setup</button>
       </router-link>
       <br>

    </div><!--fomr box -->    
   </form>

</div>
</template>

<script>
import firebase from 'firebase'
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

  },



}
</script>


<style scoped>

  
  form{
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



   .account-type{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-content: middle;
       padding:32px;
       margin:auto 10px auto 10px;
       width:70px;
       border-radius:5px;
   }
   .account-type i,p{
       display: block;
       margin:auto;
       align-self: middle;
       width:100%;
       padding:5px 0px;
   }

</style>
