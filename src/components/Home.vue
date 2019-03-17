<template>
<div id="home">
    <h1>Hi, Welcome home</h1>
    <h2>{{user.email}}</h2>
    <small>now hosted at <a href="https://brightworksvue.firebaseapp.com/">https://brightworksvue.firebaseapp.com/</a></small>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Home",
    data(){
        return{
           
           user: firebase.auth().currentUser,
           
        }
    },
    
}
</script>

<style scoped>

</style>
