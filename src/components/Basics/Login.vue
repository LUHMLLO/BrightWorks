<template>
<div id="login">


   <form class="form-container">
     <div class="form-box">
       <h1>Log in</h1>

      <div class="input-container">
        <i class='uil uil-envelope-alt'></i><input type="text" name="email" id="email" v-model="email" placeholder="email" required/> 
      </div>
      <div class="input-container">
        <i class='uil uil-keyhole-square'></i><input type="password" name="password" id="password" v-model="password" placeholder="password" required/>
      </div>


       <br>

       <button @click="logIn" class="mdl-button">Sign in</button>
       
       <br>

       <a>forgot my password</a>
       <br><br>
    </div><!--fomr box -->

    <div class="floaties">
        <router-link to="/signup">
          <button class="mdl-button">I dont have an account</button>
        </router-link>
    </div>
     
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

    logIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace("home");
          console.log(user.message);
        },
        (err) =>{
          Swal({ title: "Oops !", text: err.message, icon: "error"})
        }
      );
    }



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

</style>
