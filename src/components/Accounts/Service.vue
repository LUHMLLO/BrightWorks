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




        
        <div id="about" class="global-tab-content" v-if="aboutTab">

         <div id="about-presentation">
             <h3>{{servicename}}</h3>
             <p>{{servicedescription}}</p>
             <p>{{serviceprice}}</p>
             <p>{{servicescherdule}}</p>
         </div>


         <div class="global-grid">
             <div class="global-info-pill" v-for="(Detail,serviceDetailsData) in serviceDetails" :key="serviceDetailsData">
                <i v-bind:class='Detail.icon'></i>
                <span>{{Detail.detail}}</span>
             </div><!--global info pill-->
         </div>  
            
        </div><!---global tab content-->









        <div id="contract" class="global-tab-content" v-if="contractTab">
            
        </div><!---global tab content-->








</div>
</template>





<script>
import { db } from '../../firebaseConfig.js'


export default {
    name: "Service",
    
    data(){
        return{
           timelineTab: false,
           aboutTab: true,
           contractTab: false,
           reviewsTab: false,
           othersTab:false,
           helptab: false,

           url_name:null,
           serviceimg: null,
           servicename: null,
           servicedescription: null,
           serviceprice: null,
           servicescherdule: null,

           serviceDetails:[
               { 'icon': 'uil uil-phone-alt', 'detail': '809-345-9090'},
               { 'icon': 'uil uil-envelope-alt', 'detail': 'service@something.com'},
               { 'icon': 'uil uil-map-pin-alt', 'detail': 'location somewhere'},
               { 'icon': 'uil uil-folder-info', 'detail': 'idkwatelse'},
           ],



        }
    },
    
 


    beforeRouteEnter( to, from, next){        
          db.collection('services').where('url_name' , '==' , to.params.url_name).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              next(vm => {
                    vm.user_id = doc.data().user_id
                    vm.url_name = doc.data().url_name
                    vm.serviceimg = doc.data().img
                    vm.servicename = doc.data().name
                    vm.servicedescription = doc.data().description
                    vm.serviceprice = doc.data().price
                    vm.servicescherdule = doc.data().scherdule

              })
            })
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData (){
        db.collection('services').where('url_name', '==' , this.$route.params.url_name).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.user_id = doc.data().user_id
                    this.url_name = doc.data().url_name
                    this.serviceimg = doc.data().img
                    this.servicename = doc.data().name
                    this.servicedescription = doc.data().description
                    this.serviceprice = doc.data().price
                    this.servicescherdule = doc.data().scherdule
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

  
  #about-presentation{
    padding: 42px 12px;
    margin: auto auto 22px auto;
    width:96%;
  }



</style>
