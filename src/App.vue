  <template>
  <div id="app">

        <div id="sidebar" class="mdl-layout mdl-js-layout mdl-layout--drawer">

           <!-- <div class="mdl-layout__header">
              <div class="mdl-layout__header-row"></div>
            </div>-->

           <div id="sidebar-drawer" class="mdl-layout__drawer sombra">
            <div class="mdl-navigation">

              <router-link to="/" class="mdl-navigation__link">
               <i class='uil uil-bell'></i><p>inbox</p>
              </router-link>
              <br>
              <router-link to="/home" class="mdl-navigation__link">
               <i class='uil uil-home-alt'></i><p>home</p>
              </router-link>
              <br>
              <router-link to="/" class="mdl-navigation__link">
               <i class='uil uil-user'></i><p>Perfil</p>
              </router-link>
              <br>
              <router-link to="/" class="mdl-navigation__link"> 
               <i class='uil uil-search-alt'></i><p>Search</p>
              </router-link>

              <button v-on:click="logout()">log me out</button>           

            </div>

           </div>

            <main class="mdl-layout__content">
                <router-view id="routerView" />
            </main>


        </div><!--sidebar--> 
  </div>
</template> 

<script>
import firebase from 'firebase'

export default {
  name: "app",
  data(){
    return{

       user: firebase.auth().currentUser

      }
    },


       methods:{
       logout: function(){
           firebase.auth().signOut().then(() =>{
               this.$router.replace('/')
           })
       }
   },


}
</script>


<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202124;
  background: #ffff;
  overscroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
#routerView{
  width:100%;
  margin:auto;
}
#sidebar-drawer{
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    padding: 22px 0px;
    text-align: left !important;
    list-style-type: none;
    margin:0;
    list-style: none;
    border:none;
    background: #ffff;
  }
  #sidebar-drawer a{
    display: flex;
    justify-content: space-between;
    color: #202124;
  }
  #sidebar-drawer i{
    display: inline-block;
    margin:auto 10px auto auto;
    align-self: middle;
    width:10%;
    font-size:22px;
  }
  #sidebar-drawer p{
    display: inline-block;
    margin:auto auto auto 10px;
    align-self: middle;
    width: 90%;
    font-size:16px;
  }


.sombra{
  box-shadow: 0 0 10.3px rgba(0,0,0,0.1) !important;
}
img{
  width: 100%;
  object-fit: cover;
  max-width: 100%;
}




 
.mdl-layout__content::-webkit-scrollbar{
  display:none;
}



.mdl-layout__drawer-button{
  background:#333;
  outline:none;
  border-radius: 100%;
  box-shadow: none !important;
}
.mdl-layout__header,.mdl-layout__header-row{
  background:black;
  min-height: 30px !important;
  height: 30px !important;
  box-shadow: none !important;
}
.mdl-grid {
  justify-content: center;
  align-content: middle;
}



</style>