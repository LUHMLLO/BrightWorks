<template>
  <div class="navbar bg-white padding-x-25 padding-y-15 depth-1">
    <div class="navbar-content">

      <div class="navbar-section">
        <div class="navbar-logo margin-right-25">
          <h6 class="font-bolder">REM</h6>
        </div>
        <div class="form-search bg-grey-lighten-4 padding-x-15 padding-y-5">
          <span class="padding-0 font-size-11 color-grey">Search</span>
          <input type="text" class="margin-x-15 font-size-11 color-grey-darken-1">
          <i class="uil uil-search font-size-11 color-grey"></i>
        </div>
      </div>

      <div class="navbar-section">
        <div class="avatar bg-red margin-right-10 round-2 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e">
        </div>
        <a class="font-size-11 color-grey-darken-1">username</a>
        <i class="padding-x-10 font-size-11 color-grey-darken-1">|</i>
        <a class="font-size-11 color-grey-darken-1">Home</a>
        <i class="padding-x-10 font-size-11 color-grey-darken-1">|</i>
        <i class="uil uil-bell font-size-11 color-grey-darken-1 margin-right-10"></i>
        <i class="uil uil-sign-out-alt font-size-11 color-grey-darken-1"></i>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
