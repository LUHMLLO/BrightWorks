<template>
  <div>


    <button 
        class="font-bolder font-size-10 padding-10 border-transparent margin-y-0"  
        @click="createPost()" 
        :disabled="this.content === ''" 
        :class="{'bg-green-lighten-2' : this.content !== '',  'color-grey-lighten-5' : this.content !== ''}
    ">
        Publish
    </button>
  

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>