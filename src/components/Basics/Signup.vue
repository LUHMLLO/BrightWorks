<template>
<div id="signup">
<form method="post" v-on:submit.prevent name="form">




   <div id="form01" class="form-container"  :class="{ 'hidden': !form01 }">
     <div class="form-box mdl-shadow--16dp">

       <div class="go-to-tab">
         <router-link to="/login" class="go-to-tab-inactive"> SignIn </router-link>
         <router-link to="/signup" class="go-to-tab-active"> SignUp </router-link>
       </div>


       <h1>Sign up</h1>

      <div class="input-container">
        <i class='uil uil-envelope-alt'></i><input type="text" name="email" id="email" v-model="email" placeholder="email" /> 
      </div>
      <div class="input-container">
        <i class='uil uil-keyhole-square'></i><input type="password" name="password" id="password" v-model="password" placeholder="password" />
      </div>


       <br>

       <button v-on:click="ContinueForm02" class="mdl-button sombra">Sign up</button>

       <br><br>
    </div>
   </div><!---form 01-->










   <div id="form02" class="form-container"  :class="{ 'hidden': !form02 }">
     <div class="form-box mdl-shadow--16dp">
       <div style="padding: 22px 0; margin: 22px 0;">
         <h6>Let's setup your account so you can go surf.</h6>
       </div>

      <transition enter-active-class="animated fadeIn" leave-active-class="fadeOut">
        <div class="forms-input-img mdl-shadow--2dp" v-if="localuserimg">
          <img v-bind:src="localuserimg">
        </div>
      </transition>



      <div class="input-container">
        <i class='uil uil-scenery'></i>
        <input id="userimg" name="userimg" type="file" accept="image/x-png,image/gif,image/jpeg" class="global-input-file" v-on:change="PreviewImage"  />
      </div>

      <div class="input-container">
        <i class='uil uil-user'></i><input type="text" name="name" id="name" v-model="name" placeholder="name"/> 
      </div>
      <div class="input-container">
        <i class='uil uil-mobile-android'></i><input type="text" name="phone" id="phone" v-model="phone" placeholder="phone"/>
      </div>
      <br><br>
      <div class="global-grid">
          <div class="account-type mdl-shadow--2dp mdl-button" v-on:click="signService">
              <i class='uil uil-shop'></i>
              <p>Service</p>
          </div>
          <div class="account-type mdl-shadow--2dp mdl-button" v-on:click="signClient">
              <i class='uil uil-shopping-basket'></i>
              <p>Client</p>
          </div>
      </div>


       <br><br>

        <button v-on:click="choose" class="mdl-button disabled-btn sombra" v-if="IdontKnowWhatImGonnaBe">Setup</button>
        <button v-on:click="signUp" class="mdl-button sombra" v-if="ImmaBeAClient">Sign up as client</button>
        <button v-on:click="SignUpAsService" class="mdl-button sombra" v-if="ImmaBeAService">Sign up as service</button>

       <br>

    </div>    
   </div><!---form 02-->












</form>
</div>
</template>












<script>
import { firebase , db , ref } from '../../firebaseConfig.js'
import Swal from 'sweetalert'


export default {
  name: "Signup",
  data() {
    return {
      
      ActualUserCredentials: null,
      email: null,
      password: null,
      localuserimg:null,
      userimg:null,
      name: null,
      phone: null,
      serviceimg:null,
      servicename:null,
      servicedescription:null,

      form01: true,
      form02: false,
      form03: false,


      ImmaBeAClient: false,
      ImmaBeAService: false,
      IdontKnowWhatImGonnaBe: true,

      UploadImage: this.UploadImageLogic,


    }
  },

  
  methods:{


    PreviewImage(){
        const inputfile = document.getElementById('userimg');
        const file = inputfile.files[0];
        //console.log(URL.createObjectURL(file))
        this.localuserimg = URL.createObjectURL(file)
    },
    UploadImageLogic(){
        const inputfile = document.getElementById('userimg');
        const file = inputfile.files[0];
        let selectedFile = ref.child('ProfilePics/'+file.name)
      
        selectedFile.put(file).then(response =>{

          //var progress = (response.bytesTransferred / response.totalBytes) * 100;
          //console.log('Upload is ' + progress + '% done');        
          response.ref.getDownloadURL().then((downloadURL) => {
              this.userimg = downloadURL
              //console.log("uploaded img url :" + this.userimg)
          }).then(
            db.collection('users').where('user_id', '==' , this.ActualUserCredentials).get().then(querySnapshot =>{
              querySnapshot.forEach(doc => {
                doc.ref.update({
                  img: this.userimg,
                })
              })
            }).then(
                
              Swal({ 
                title: "Congrats ! ", 
                text: "Your account has been created", 
                icon: "success", 
                button: "let's go!",
              }).then(()=> {this.$router.replace("home")})

            )
          )

        }).catch(err => 
          console.log(err)
        );
    },
      



    signUp: function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (credentials) => {

          return db.collection('users').doc(credentials.user.uid).set({
            user_id: credentials.user.uid,
            name: this.name,
            phone: this.phone,
            email: this.email,
            AccountType: 'client',
          }).then(() =>{
            this.ActualUserCredentials = credentials.user.uid,
            this.UploadImage()
          })
        },
        (err) => {
          Swal({ title: "Oops !", text: err.message, icon: "error", button: "let's try again",});
        }
      );
    },

    SignUpAsService: function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (credentials) => {
          return db.collection('users').doc(credentials.user.uid).set({
            user_id: credentials.user.uid,
            name: this.name,
            phone: this.phone,
            email: this.email,
            AccountType: 'service',
          }).then(() =>{
            this.ActualUserCredentials = credentials.user.uid,
            this.UploadImage()
          })
        },
        (err) => {
          Swal({ title: "Oops !", text: err.message, icon: "error", button: "let's try again",});
        }
      );
    },






    ContinueForm02:function (){
      this.form01 = false
      this.form02 = true
    },
    ContinueForm03:function (){
      this.form02 = false
      this.form03 = true
    },
    choose: function(){
      Swal({ title: "Slow down", text: "you need to select wich type of account you are gonna use", icon: "warning"})
    },
    signClient: function(){
      this.ImmaBeAClient = true
      this.ImmaBeAService = false
      this.IdontKnowWhatImGonnaBe = false
    },
    signService: function(){
      this.ImmaBeAClient = false
      this.ImmaBeAService = true
      this.IdontKnowWhatImGonnaBe = false
    },

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
  
  #form03{
    background: url("https://cdn.dribbble.com/users/63407/screenshots/5584539/dribbble_starry_night.png");
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
    padding-bottom:22px;
    overflow: hidden;
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


  .forms-input-img{
    width: 200px;
    height: 200px;
    border-radius:100%;
    overflow: hidden;
    margin: auto;
  }
  .forms-input-img img{
    width:100%;
    height: 100%;
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

