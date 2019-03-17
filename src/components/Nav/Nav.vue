<template>
  <div id="nav">


      <transition name="nav-anim" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">

        <div id="sidebar" class="mdl-shadow--6dp" v-if="isNavOn">
                 
                 <div id="sidebar-route-buttons" class="mdl-grid">
                     <i class='uil uil-arrow-left' @click="$router.go(-1)"></i>
                     <i class='uil uil-arrow-right' @click="$router.go(+1)"></i>
                 </div>
              
            <div id="sidebar-header" v-if="isLoggedIn">
                <h4>luis.jr.melo@gmail</h4>

                <div id="sidebar-header-icons" class="mdl-grid">
                    <i class='uil uil-entry' v-on:click="logout"></i>
                    <i class='uil uil-bell'></i>
                    <i class='uil uil-cog'></i>
                </div>
            </div>
              

              <router-link to="/home" class="mdl-button">
               <i class='uil uil-home-alt' style="width:50%;"></i><p>home</p>
              </router-link>

              <router-link to="/perfil" class="mdl-button">
               <i class='uil uil-user' style="width:50%;"></i><p>Perfil</p>
              </router-link>
              
              <router-link to="/search" class="mdl-button"> 
               <i class='uil uil-search-alt' style="width:50%;"></i><p>Search</p>
              </router-link>

        </div><!--sidebar-->
      </transition>

      

         <div id="floating-nav-toggle" class='mdl-shadow--2dp' v-on:click="isNavOn = !isNavOn" v-bind:class="{ withNavOn: isNavOn }">
             <transition name="nav-btn-anim" enter-active-class="animated fadeIn" leave-active-class="animated FadeOut">
                 <i class='uil uil-apps' v-if="!isNavOn"></i>
                 <i class="uil uil-times" v-else></i>
             </transition>
         </div>



      <transition name="nav-overlay-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
         <div id="nav-overlay" v-if="isNavOn" v-on:click="isNavOn = false"></div>
      </transition>
      
      

  
  
  </div>
</template> 






<script>
import firebase from 'firebase'
import mdl from 'material-design-lite'
import Swal from 'sweetalert'

export default {
  name: "Nav",
  data(){
    return{

       //user: firebase.auth().currentUser,
       isLoggedIn: false,
       currentUser: false,
       isNavOn: false,

      }
    },




    
    methods:{
       logout: function(){
           Swal({ title: "Logging out" , text: "are you sure you wanna leave?", icon: "warning", buttons:["i changed my mind","see you later"],})
           .then((letmeout) => {
               if(letmeout){
                   firebase.auth().signOut().then(() =>{this.$router.replace('/')})
               }
               else{

               }
            })
       },
   },


  created(){
    if(firebase.auth().currentUser){
        this.isLoggedIn = true
        this.currentUser = firebase.auth().currentUser.email
    }
  },

  
  mounted: function(){
    componentHandler.upgradeAllRegistered()
  }


}
</script>





<style scoped>
#sidebar{
    height: 100vh;
    width: 300px;
    position: fixed;
    top:0;
    left: 0;
    padding:22px;
    background: #ffffff;
    display: block;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 6;
  }
  #sidebar a{
    display: flex;
    justify-content: space-between;
    align-content: middle;
    color: #202124;
    width:100%;
    padding:12px 22px;
    border-radius: 8px;
    margin:22px auto 22px auto;
    cursor: pointer;
    position: relative;
    height: auto;
  }
  #sidebar i,p{
    display: inline-block;
    margin:auto;
    align-self: middle;
  }
  #sidebar p{
    font-size:16px;
    width:60%;
    text-align: left;
  }
  #sidebar i{
    font-size:22px;
  }



  #sidebar-route-buttons{
      width:100%;
      height: auto;
      margin:auto;
      background:rgba(200,200,200,0.1);
      border-radius: 100px;
      padding:10px 0px;
      display: flex !important;
      justify-content: space-between !important;
  }
  #sidebar-route-buttons i{
      cursor: pointer;
      display: inline-block;
      margin:auto;
      align-self: middle;
  }

  #sidebar-header{
      width:100%;
      padding:22px 0px;
      margin: 22px auto 22px auto;
  }

  #sidebar-header-icons{
      width:100%;
      margin:auto;
      padding:22px 0px;
      display: flex !important;
      justify-content: space-between !important;
  }
  #sidebar-header-icons i{
      margin: auto 10px auto 10px;
      padding:8px 14px;
      display: inline-block;
      align-self: middle;
      cursor: pointer;
  }


  .mdl-button:focus{
      background: none;
  }
  #floating-nav-toggle{
      background:white;
      border-radius:100px;
      width:50px;
      height:50px;
      justify-content: center;
      align-content: middle;
      display: flex;
      position:fixed;
      top:0;
      left: 0;
      margin: 22px auto auto 22px;
      transition: all 0.6s ease-in-out;
      z-index: 6;
  }
  .withNavOn{
    margin: 22px auto auto 362px !important;
  }
  
  #floating-nav-toggle i{
      align-self: middle;
      justify-self: center;
      margin:auto;
      font-size:20px;
  }



  #nav-overlay{
      width:100%;
      height: 100vh;
      background: rgba(0,0,0,0.3);
      position:fixed;
      z-index: 3;
      filter:blur(8px);
      transform: scale(5);
      box-shadow: inset 0 0 22000px 22000px rgba(0,0,0,0.5);
  }
</style>