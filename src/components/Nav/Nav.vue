 <template>
  <div id="nav">


      <transition name="nav-anim" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">

        <div id="sidebar" class="mdl-shadow--6dp" v-if="isNavOn">
              
            <div id="sidebar-header" v-if="isLoggedIn">                                 
                    <div id="sidebar-user-img">
                      <img v-bind:src="userimg">
                    </div>

                <h6>{{username}}</h6>
            </div>
              

            <div id="sidebar-links">

              <router-link :to="{ name: 'dashboard_C', params: {userid: user_id}}" class="mdl-button" v-if="accountType == 'client' && isLoggedIn" >
               <i class='uil uil-home-alt' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Home</p>
              </router-link>
              <router-link :to="{ name: 'dashboard_S', params: {userid: user_id}}" class="mdl-button" v-if="accountType == 'service' && isLoggedIn">
               <i class='uil uil-home-alt' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Home</p>
              </router-link>              


              <router-link :to="{ name: 'ClientProfile', params: {userid: user_id}}" class="mdl-button" v-if="accountType == 'client' && isLoggedIn" >
               <i class='uil uil-user' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Perfil</p>
              </router-link>
              <router-link :to="{ name: 'ServiceProfile', params: {userid: user_id}}" class="mdl-button" v-if="accountType == 'service' && isLoggedIn">
               <i class='uil uil-user' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Perfil</p>
              </router-link>


              <router-link to="/search" class="mdl-button"> 
               <i class='uil uil-search-alt' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Search</p>
              </router-link>

              <router-link to="/manage_services" class="mdl-button" v-if="accountType == 'service' && isLoggedIn">
               <i class='uil uil-folder' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Services</p>
              </router-link>

              <router-link to="/manage_plans" class="mdl-button" v-if="accountType == 'service' && isLoggedIn">
               <i class='uil uil-wallet' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Payments</p>
              </router-link>

              <router-link to="/Compose" class="mdl-button" v-if="accountType == 'service' && isLoggedIn">
               <i class='uil uil-postcard' style="width:50%;" v-on:click="isNavOn = false"></i><p v-on:click="isNavOn = false">Posts</p>
              </router-link>

              <!-- <router-link to="/settings" class="mdl-button">
                <i class='uil uil-cog' style="width:50%;"></i><p>Settings</p>
              </router-link> -->

              <router-link to="/" class="mdl-button">
                <i class='uil uil-entry' v-on:click="logout" style="width:50%;"></i><p>Log out</p>
              </router-link>                            

            </div><!--sidebar links-->

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
import {firebase,db} from '../../firebaseConfig.js'
import Swal from 'sweetalert'

export default {
  name: "Nav",
  data(){
    return{

       actualUser: null,
       isLoggedIn: false,
       currentUser: false,
       isNavOn: false,
       userimg: null,
       user_id:null,
       accountType:null,
       username:null,
      }
    },




    
    methods:{
       logout: function(){
           Swal({ title: "Logging out" , text: "are you sure you wanna leave?", icon: "warning", buttons:["i changed my mind","see you later"],})
           .then((letmeout) => {
               if(letmeout){
                  this.isNavOn = false
                   firebase.auth().signOut().then(() =>{this.$router.replace('/')})
               }
            })
       },



   },


  beforeCreate(){
    let self = this;  

    if(firebase.auth().currentUser){
        this.isLoggedIn = true
        this.currentUser = firebase.auth().currentUser.email


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

                    self.username = snapshot.data().name
        })

    }
    else{
      this.isLoggedIn = false
    }


  },



  beforeUpdate(){
    let self = this;  

    if(firebase.auth().currentUser){
        this.isLoggedIn = true
        this.currentUser = firebase.auth().currentUser.email


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

                    self.username = snapshot.data().name
        })

    }
    else{
      this.isLoggedIn = false
    }


  },

  

  
  


}
</script>





<style scoped>
#sidebar{
    height: 100vh;
    width: 250px;
    position: fixed;
    top:0;
    left: 0;
    padding:5px 22px 100px 22px;
    background: #ffffff;
    display: block;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 90;
    overflow: hidden;
    overflow-y: auto;
  }
  #sidebar::-webkit-scrollbar{
    display: none;
  }
  #sidebar a{
    display: flex;
    justify-content: space-between;
    align-content: middle;
    color: #202124;
    width:100%;
    padding:12px 10px;
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
    width:80%;
    text-align: left;
  }
  #sidebar i{
    font-size:22px;
  }

  #sidebar-links{
    width:100%;
    margin:auto;
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
      padding:22px 0px 0px 0px;
      margin: auto;
  }

  #sidebar-user-img{
    border-radius:100px;
    width:200px;
    height: 200px;
    overflow: hidden;
    margin:auto;
  }
  #sidebar-user-img img{
    width:100%;
    height: 100%;
  }

  #sidebar-header h6{
    margin: 32px auto;
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
      border-radius: 100px;
      width:50px;
      height:50px;
      justify-content: center;
      align-content: middle;
      display: flex;
      position:fixed;
      top:0;
      left: 0;
      margin: 10px auto auto 10px;
      transition: all 0.6s ease-in-out;
      z-index: 90;
  }
  .withNavOn{
    margin: 22px auto auto 280px !important;
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
      z-index: 89;
      filter:blur(8px);
      transform: scale(5);
      box-shadow: inset 0 0 22000px 22000px rgba(0,0,0,0.5);
  }



  #logoutbtn{
    transition: all 0.5s ease-in-out;
  }
  #notificationsbtn{
    transition: all 0.5s ease-in-out;
  }
  #settingsbtn{
    transition: all 0.5s ease-in-out;
  }


  #logoutbtn:hover{
    color:#FF82A9;
  }
  #notificationsbtn:hover{
    color:#FFC67B;
  }
  #settingsbtn:hover{
    color:#71A9B5;
  }  
</style>