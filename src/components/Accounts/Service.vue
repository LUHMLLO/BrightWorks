<template>
<div>           

      
      <div class="global-header mdl-shadow--2dp">

          <div class="global-header-bg">
              <img v-bind:src="serviceimg">
          </div>

          <div class="global-header-bg-overlay"></div>

          <div class="global-header-img mdl-shadow--2dp">
              <img v-bind:src="serviceimg">
          </div>


          <h3 class="global-header-title">{{servicename}}</h3>
          

      </div><!--header-->



       <div class="global-tabs-bar">

           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:timelineTab}" v-on:click="ShowTimeline">timeline</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:aboutTab }" v-on:click="ShowAbout">About</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:contractTab}" v-on:click="ShowContract">Contract</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:reviewsTab}" v-on:click="ShowReviews">Reviews</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:othersTab}" v-on:click="ShowOthers">Other services by the same provider</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:helptab}" v-on:click="ShowHelp">help</button>

       </div><!---options bar-->




       <div id="timeline" class="global-tab-content" v-if="timelineTab">
             <timeline v-bind:serviceid="service_id"/>
       </div>
        
        <div id="about" class="global-tab-content" v-if="aboutTab">
            <about v-bind:serviceid="service_id"/>
        </div><!---global tab content-->

        <div id="contract" class="global-tab-content" v-if="contractTab">
            <contract v-bind:serviceid="service_id"/>
        </div><!---global tab content-->

        <div id="reviews" class="global-tab-content" v-if="reviewsTab">
            <reviews v-bind:serviceurlname="url_name"/>
        </div><!---global tab content-->        

        <div id="provider" class="global-tab-content" v-if="othersTab">
            <provider v-bind:serviceurlname="url_name"/>
        </div><!---global tab content-->

        <div id="help" class="global-tab-content" v-if="helptab">
            <help v-bind:serviceurlname="url_name"/>
        </div><!---global tab content-->




</div>
</template>





<script>
import { db } from '../../firebaseConfig.js'

import timeline from './serviceTabs/timeline.vue'
import about from './serviceTabs/about.vue'
import contract from './serviceTabs/contract.vue'
import reviews from './serviceTabs/reviews.vue'
import provider from './serviceTabs/provider.vue'
import help from './serviceTabs/help.vue'

export default {
    name: "Service",

    components:{
          timeline,
          about,
          contract,
          reviews,
          provider,
          help,
    },
    
    data(){
        return{
           timelineTab: false,
           aboutTab: false,
           contractTab: false,
           reviewsTab: false,
           othersTab:false,
           helptab: false,

           url_name:null,
           serviceimg: null,
           servicename: null,
           owner_id:null,
           service_id:null,

           serviceDetails:[
               { 'icon': 'uil uil-phone-alt', 'detail': '809-345-9090'},
               { 'icon': 'uil uil-envelope-alt', 'detail': 'service@something.com'},
               { 'icon': 'uil uil-map-pin-alt', 'detail': 'location somewhere'},
               { 'icon': 'uil uil-folder-info', 'detail': 'idkwatelse'},
           ],



        }
    },
    
 


    beforeRouteEnter( to, from, next){        
          db.collection('services').where('service_id' , '==' , to.params.service_id).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              next(vm => {
                   // console.log(doc.data())
                    vm.owner_id = doc.data().owner_id
                    vm.url_name = doc.data().url_name
                    vm.serviceimg = doc.data().img
                    vm.servicename = doc.data().name
                    vm.service_id = doc.data().service_id

                    vm.timelineTab = true

              })
            })
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData (){
        db.collection('services').where('service_id', '==' , this.$route.params.service_id).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.owner_id = doc.data().owner_id
                    this.url_name = doc.data().url_name
                    this.serviceimg = doc.data().img
                    this.servicename = doc.data().name
                    this.service_id = doc.data().service_id

                    this.timelineTab = true
          })
        })
      },





     
     ShowTimeline: function(){
           this.timelineTab = true
           this.aboutTab = false
           this.contractTab = false
           this.reviewsTab = false
           this.othersTab =false
           this.helptab = false
     },
     ShowAbout: function(){
           this.timelineTab = false
           this.aboutTab = true
           this.contractTab = false
           this.reviewsTab = false
           this.othersTab =false
           this.helptab = false
     },
     ShowContract: function(){
           this.timelineTab = false
           this.aboutTab = false
           this.contractTab = true
           this.reviewsTab = false
           this.othersTab =false
           this.helptab = false
     },     
     ShowReviews: function(){
           this.timelineTab = false
           this.aboutTab = false
           this.contractTab = false
           this.reviewsTab = true
           this.othersTab =false
           this.helptab = false
     },
     ShowOthers: function(){
           this.timelineTab = false
           this.aboutTab = false
           this.contractTab = false
           this.reviewsTab = false
           this.othersTab =true
           this.helptab = false
     },
     ShowHelp: function(){
           this.timelineTab = false
           this.aboutTab = false
           this.contractTab = false
           this.reviewsTab = false
           this.othersTab =false
           this.helptab = true
     },





    },
}
</script>



<style scoped>





</style>
