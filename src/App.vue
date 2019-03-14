<template>
  <div id="app">
    <Nav/>


    <transition name="changePageAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
      <router-view id="routerView" />
    </transition>
  
  </div>
</template> 






<script>
import firebase from 'firebase'
import mdl from 'material-design-lite'
import Nav from './components/Nav/Nav.vue'


export default {
  name: "app",
  data(){
    return{

      }
    },

    components:{
      Nav,
    },



    
    methods:{
       logout: function(){
           firebase.auth().signOut().then(() =>{
               this.$router.replace('/')
           })
       }
   },





  mounted: function(){
    componentHandler.upgradeAllRegistered();
  }


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
  user-select: none;
  transition: all 0.5s ease-in-out;
  width:100%;
  padding:0;
  margin:0;
}
#routerView{
  width:100%;
  margin:auto;
}


.sombra{
  box-shadow: 0 0 10.3px rgba(0,0,0,0.1) !important;
}
img{
  width: 100%;
  object-fit: cover;
  max-width: 100%;
}


.mdl-grid {
  justify-content: center;
  align-content: middle;
}

.mdl-button{
  text-decoration: none !important;
  height: auto !important;
}




</style>