<template>
  <div>
    <br>
        <br>
            <br>
    <div id="login" class="LoginRegisterItem container">
      <br>
      <br>
      <br>
      <h1>Log in</h1>
        <small>Log in with your user account</small>

      <br>
      <br>

      <input type="text" id="email" name="email" v-model="email" placeholder="email">
      <br>
      <input type="password" id="password" name="password" v-model="password" placeholder="password">

      <br>
      <br>
      <br>

      <button class="sombra roundify" @click="logIn">
        <i class="uil uil-user-check"></i> Log in
      </button>
      <button class="sombra roundify" @click="signUp">
        <i class="uil uil-user-check"></i> SignUp
      </button>
      <br>
      <br>
      <br>

      <router-link to="forgotPass">
          <a >forgot my password</a>
          </router-link> 
    </div>
    <!--login-->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    logIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Great", "You are in!", "success");
            var x = document.getElementById("Navbar");
            x.style.display = "block";
            window.location.href = "#/home";
          },
          function(err) {
            alert("Opps.", err.message, "error");
          }
        );
    },
    signUp: function(){
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

});
    }
  }
};
</script>