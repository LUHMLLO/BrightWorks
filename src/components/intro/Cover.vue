<template>
    <div id="cover">



    <div id="cover-header">
       <br>
      
       <h1>Bright Works</h1>
       
         <p>
           A work and bussiness promoting platform with powerful tools to adquire clients and manage your work all in one place; <br>
           A better way to connect people with the fittest and most qualified for work they might need them.
         </p>



       <router-link to="/login">
          <button class="mdl-button"> <i class="uil uil-user-check"></i> Sign in </button>
       </router-link>

       <router-link to="/signup">
          <button class="mdl-button"> Sign up <i class="uil uil-user-plus"></i> </button>
       </router-link>

       <br>
      </div>






    </div>
</template>

<script>
export default {
    name: "Cover",
    data(){
        return{

        }
    }
}
</script>

<style>

</style>
