<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  .dropdown {
    position: relative !important
  }

  .dropdown .dropdown-menu {
    min-width: 100%;
    visibility: hidden !important;
    position: absolute;
    top: 100% !important;
    text-align: left !important;
    display: flex !important;
    flex-direction: column !important;
    white-space: nowrap !important;
  }

  .dropdown .dropdown-menu:hover {
    visibility: visible !important
  }

  .dropdown .toggle-focus:focus+.dropdown-menu {
    visibility: visible !important
  }

  .dropdown .toggle-hover:hover+.dropdown-menu {
    visibility: visible !important
  }
</style>