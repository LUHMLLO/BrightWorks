<template>
  <div id="notfound">
      
    <div id="box-container">
         


         <div id="message-container" class="mdl-shadow--4dp">
             <h1 style="font-size:50px;">Error 404 page not found</h1>
             <p style="font-size:22px;">I guess X wont give it to ya'.</p>

            <router-link to="/home">
            <button class="mdl-button global-button">go back home</button>
            </router-link>
            <br>
         </div>




    </div>


  </div>    
</template>

<script>
export default {
    name: "NotFound",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#box-container{
    background: url('https://cdn.dribbble.com/users/111260/screenshots/4929152/hss_dribble_2.png');
    width:100%;
    min-width:100vw;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
#message-container{
    background: white;
    padding:22px;
    align-self: middle;
    margin: auto;
    min-width:300px;
    min-height:300px;
    width:600px;
    height: 600px;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border-radius:6%;
}
</style>
