<template>
<div>


 <div class="global-horizontal-scroll">
   <div class="global-horizontal-position">
     <taskmodule/>
   </div><!--horizontal position--->
 </div><!---horizontal scroll--->



</div>
</template>


<script>

import taskmodule from './taskmodule.vue'

export default {
    name: 'dashboard_S',
    components:{
      taskmodule,
    },
}
</script>

