<template>
<div id="signup">


   <form>
     <h1>Sign up</h1>
     <br>
     <input type="text" name="email" id="email" v-model="email" placeholder="email" required/>
     <br>
     <input type="password" name="password" id="password" v-model="password" placeholder="password" required/>
     <br><br>
     <button v-on:click="signUp()">Sign up</button>
   </form>

</div>
</template>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert'

export default {
  name: "Signup",
  data() {
    return {
      
      email:'',
      password:'',


    }
  },

  
  methods:{

    signUp: function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
              this.$router.replace('login')
        },
        (err) => {
          Swal({ title: "Oops !", text: err.message, icon: "error"});
        }
      );
    }



  },



}
</script>
