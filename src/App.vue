<template>
  <div id="app">
    <Sidebar id="SideBar"/>
    <router-view id="routerView"/>
  </div>
</template> 






<script>
import Sidebar from "./components/navigation/Sidebar.vue"

export default {
  name: "app",
  components: {
    Sidebar
  }
};
</script>





<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>