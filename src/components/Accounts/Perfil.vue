<template>
<div id="perfil">





           <div id="perfil-header" class="mdl-shadow--2dp">
              
              <div id="perfil-img" class="mdl-shadow--3dp">
                  <img src="https://cdn.dribbble.com/users/14268/screenshots/3953645/paper.png">
              </div>


              <div></div>


              <div id="perfil-header-bar" class="">
                  <a>timeline</a>
                  <a>timeline</a>
                  <a>timeline</a>
                  <a>timeline</a>
              </div>

           </div><!---perfil header -->







</div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Perfil",
    data(){
        return{
           
           user: firebase.auth().currentUser,
            
        }
    },

}
</script>

<style scoped>

   #perfil-header{
       width:100%;
       margin:auto;
   }
   #perfil-img{
       border-radius:100px;
       width:200px;
       height: 200px;
       display: inline-block;
       align-self: middle;
       margin: 62px auto 22px auto; 
       overflow: hidden;
       object-fit: cover !important;
    }
    #perfil-img img{
        width: 100%;
        height: 100%;
        object-fit: cover !important;
    }

    #perfil-header-bar{
        width:100%;
        display: flex;
        justify-content: center;
        margin: 22px auto;
    }
    #perfil-header-bar a{
        padding:22px;
        margin: auto 12px auto 12px;
        display: inline-block;
        align-self: middle;

    }
</style>
