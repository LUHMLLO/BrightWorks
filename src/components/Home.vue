<template>
<div id="home">
    <h1>Hi, Welcome home</h1>
    <h2>{{user.email}}</h2>

    <button v-on:click="logout()">log me out</button>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Home",
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
   }


}
</script>

<style scoped>

</style>
