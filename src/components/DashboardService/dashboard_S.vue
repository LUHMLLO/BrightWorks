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

import {firebase,db} from '../../firebaseConfig.js'

import taskmodule from './taskmodule.vue'
import myservices from './myservices.vue'

export default {
    name: 'dashboard_S',
    components:{
      taskmodule,
      myservices,
    },
    data(){
      return{

      }
    },



    
    beforeCreate(){
             
             let self = this; 
             
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {                          
                    if(snapshot.data().AccountType !== 'service'){
                        self.$router.go(-1)
                    }                             
        })
        
    },



}
</script>

