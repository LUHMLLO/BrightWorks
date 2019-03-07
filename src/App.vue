<template>
  <div id="app">

        <div id="sidebar" class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
     


           <div id="sidebar-drawer" class="mdl-layout__drawer sombra">
            <div class="mdl-navigation">


              <router-link to="/" class="mdl-navigation__link">
               <i class="material-icons">home</i> <p>Home</p>
              </router-link>
              <br>
              <router-link to="/" class="mdl-navigation__link">
               <i class="material-icons">account_box</i> <p>Perfil</p>
              </router-link>
              <br>
              <router-link to="/" class="mdl-navigation__link">
               <i class="material-icons">markunread_mailbox</i> <p>Inbox</p>
              </router-link>
              <br>
              <router-link to="/" class="mdl-navigation__link"> 
               <i class="material-icons">search</i> <p>Search</p>
              </router-link>

            </div>

           </div>


            <main class="mdl-layout__content">
              <router-view id="routerView" />
            </main>


        </div><!--sidebar-->

      

  
  
  </div>
</template> 






<script>

export default {
  name: "app",
  data(){
    return{
      }
    },
};
</script>





<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  }
  #sidebar-drawer a{
    display: flex;
    justify-content: space-between;
  }
  #sidebar-drawer i{
    display: inline-block;
    margin:auto 10px auto auto;
    align-self: middle;
    width:10%;
    font-size:16px;
  }
  #sidebar-drawer p{
    display: inline-block;
    margin:auto auto auto 10px;
    align-self: middle;
    width: 90%;
  }

.sombra{
  box-shadow: 0 0 10.3px rgba(0,0,0,0.1) !important;
}
</style>