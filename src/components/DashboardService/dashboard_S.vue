<template>
<div>





  
  <div class="global-dashboard-section mdl-shadow--2dp">

    <div class="global-dashboard-section-title">
      <h3>Tasks</h3>
    </div>
     

      <div class="global-horizontal-scroll">
          <taskmodule/>
      </div><!---horizontal scroll--->


  </div><!---global dashboard section--->




  <div class="global-dashboard-section mdl-shadow--2dp">

    <div class="global-dashboard-section-title">
      <h3>My services</h3>
    </div>
     

      <div class="global-horizontal-scroll">
          <myservices/>
      </div><!---horizontal scroll--->


  </div><!---global dashboard section--->





</div>
</template>


<script>

import taskmodule from './taskmodule.vue'
import myservices from './myservices.vue'

export default {
    name: 'dashboard_S',
    components:{
      taskmodule,
      myservices,
    },
}
</script>

