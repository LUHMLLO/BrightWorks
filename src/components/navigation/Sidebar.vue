<template>
  <div id="sidebar" class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
     


           <div id="sidebar-drawer" class="mdl-layout__drawer sombra">
             <h3 class="mdl-layout-title">Title</h3>

             <div class="mdl-navigation">

               <a class="mdl-navigation__link">Perfil</a>
               <a class="mdl-navigation__link">Perfil</a>
               <a class="mdl-navigation__link">Perfil</a>
               <a class="mdl-navigation__link">Perfil</a>

             </div>

           </div>






  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data(){
    return{
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  
  #sidebar-drawer{
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    padding: 22px;
    text-align: left;
    list-style-type: none;
    margin:0;
    list-style: none;
    border:none;
  }



</style>
