<template>
  <div class="navbar bg-white padding-x-25 padding-y-10 depth-1">
    <div class="navbar-content">

      <div class="navbar-section">
        <router-link to="/"  class="navbar-logo margin-right-25">
          <h6 class="font-bolder">REM</h6>
        </router-link>
        <div class="form-search bg-grey-lighten-4 padding-x-15 padding-y-5">
          <span class="padding-0 font-size-11 color-grey">Search</span>
          <input type="text" class="margin-x-15 font-size-11 color-grey-darken-1">
          <i class="uil uil-search font-size-11 color-grey"></i>
        </div>
      </div>

      <div class="navbar-section">
        <router-link to="/profile" class="avatar avatar round-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" class="user-select-none cursor-none pointer-event-none">
        </router-link>

        <i class="uil uil-bell font-size-16 color-grey-darken-1 margin-left-10 color-green-lighten-2-hover"></i>
        <i class="uil uil-cog font-size-16 color-grey-darken-1 margin-left-10 color-green-lighten-2-hover"></i>
        <i class="uil uil-sign-out-alt font-size-16 color-grey-darken-1 margin-left-10 color-green-lighten-2-hover" @click="logout"></i>
      </div>

    </div>
  </div>
</template>

<script>
import { firebase } from '../firebaseConfig.js'
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  methods:{
    
       logout: function(){
          Swal.fire({
              type: 'warning',
              title: 'Closing session',
              text: 'are you sure you wanna leave?',
              showCancelButton: true,
              cancelButtonColor: '#000000',
              confirmButtonText: 'Yes, I would like to sign out',
              confirmButtonColor: '#000000',
          }).then((result) => {
            if (result.value) {
              firebase.auth().signOut().then(() =>{this.$router.replace('/register')})
            }
          })
       },
  }
}
</script>