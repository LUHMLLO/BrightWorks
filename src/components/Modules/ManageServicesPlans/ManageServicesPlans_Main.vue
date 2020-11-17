<template>
<div>

        <div id="manage-services-header" class="global-header mdl-shadow--2dp">
          <h3 class="global-header-title-simple" style="">Manage services payment options</h3>
        </div><!--manage services header-->



       <div class="global-tabs-bar">

           <button class="mdl-button global-button-round sombra" v-on:click="showAll">All Plans</button>
           <button class="mdl-button global-button-round sombra" v-on:click="showAdd">Add new Plan</button>

       </div><!---options bar-->


       <div id="all" class="global-tab-content" v-if="isAll">
           <ManageServicesPlans_View/>
       </div><!--all tab-->

       <div id="add" class="global-tab-content" v-if="isAdd">
           <ManageServicesPlans_Add/>
       </div><!--all tab-->



</div>
</template>


<script>
import ManageServicesPlans_View from './ManageServicesPlans_View.vue'
import ManageServicesPlans_Add from './ManageServicesPlans_Add.vue'

export default {
    name: 'ManageServices_Main',
    components:{
        ManageServicesPlans_View,
        ManageServicesPlans_Add,
    },
    data(){
        return{

            isAdd: false,
            isAll: true,

        }
    },
    methods:{
        showAll: function(){
            this.isAll = true
            this.isAdd = false
        },
        showAdd: function(){
            this.isAll = false
            this.isAdd = true
        },
    }
}
</script>
