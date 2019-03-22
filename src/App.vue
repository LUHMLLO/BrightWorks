<template>
  <div id="app">
    <Nav/>


    <transition name="changePageAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
      <router-view id="routerView" />
    </transition>
  
  </div>
</template> 






<script>
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

    },





  mounted: function(){
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
body::-webkit-scrollbar{
  display: none !important;
}
#routerView{
  width:100%;
  margin:auto;
}


.sombra{
  box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
}
img{
  width: 100%;
  object-fit: cover;
  max-width: 100%;
}

.disabled-btn{
  background: rgba(200,200,200,0.9) !important;
  color:gray !important;
}

.mdl-grid {
  justify-content: center;
  align-content: middle;
}

.mdl-button{
  text-decoration: none !important;
  height: auto !important;
}


  .tabActive{
       border:solid 0.5px rgba(87, 85, 217,0.2) !important;
  }
  .mdl-button:hover{
      background: rgba(87, 85, 217,0.1) !important;
  }
  .mdl-button:focus{
      background: none !important;
  }

  .swal-button{
    outline: none !important;
    border-radius:6px;
  }
  .swal-button.swal-button--confirm,.swal-button.swal-button--confirm:hover,.swal-button.swal-button--confirm:focus{
    background: rgba(87, 85, 217,0.3) !important;
    border: none !important;
    outline:none !important;
    color: #333;
  }
  .swal-button.swal-button--cancel,.swal-button.swal-button--cancel:hover,.swal-button.swal-button--cancel:focus{
    background: rgba(255,100,100,0.1) !important;
    border: none !important;
    outline:none !important;
    color: #333;
  }
  



















</style>