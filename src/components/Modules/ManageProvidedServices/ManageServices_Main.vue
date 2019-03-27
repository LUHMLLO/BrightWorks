<template>
<div>

        <div id="manage-services-header" class="global-header mdl-shadow--2dp">
          <h3 class="global-header-title-simple" style="">Manage Services</h3>
        </div><!--manage services header-->



       <div class="global-tabs-bar">

           <button class="mdl-button global-button-round sombra" v-on:click="showAll">All services</button>
           <button class="mdl-button global-button-round sombra" v-on:click="showAdd">Add new one</button>

       </div><!---options bar-->


       <div id="all" class="global-tab-content" v-if="isAll">
           <ManageServices_View/>
       </div><!--all tab-->

       <div id="add" class="global-tab-content" v-if="isAdd">
           <ManageServices_Add/>
       </div><!--all tab-->



</div>
</template>


<script>
import ManageServices_View from './ManageServices_View.vue'
import ManageServices_Add from './ManageServices_Add.vue'

export default {
    name: 'ManageServices_Main',
    components:{
        ManageServices_View,
        ManageServices_Add,
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
