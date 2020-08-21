<template>
  <facebook_layout :id="this.$options.name">
    <h1>This is an home page</h1>
  </facebook_layout>
</template>

<script>
export default {
  name: 'Home',
  components: {
    facebook_layout:() => import('../layouts/facebook'),
  }
}
</script>
