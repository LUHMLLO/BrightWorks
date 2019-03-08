<template>
    <div id="cover">



    <div id="cover-header">      
      <div id="cover-header-content">
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

      </div>
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

<style scoped>


  #cover-header{
    background: url('https://images.unsplash.com/photo-1551864605-74764bd3d836?ixlib=rb-1.2.1&auto');
    background-size: cover;
    padding:100px 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: inset 0 0 100px 900px rgba(0,0,0,0.5);
    align-content: middle;
    display: flex;
    justify-content: center;
  }
  #cover-header-content{
    margin: 100px auto 130px auto;
    align-self: middle;
    color: white;
  }
  #cover-header-content button{
    color:white;
    border-radius:100px;
    margin: 10px 10px;
  }

</style>
