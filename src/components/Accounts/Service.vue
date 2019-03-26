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

           <button class="mdl-button global-button-round sombra">timeline</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{ globalActiveTab: aboutTab }">About</button>
           <button class="mdl-button global-button-round sombra">Contract</button>
           <button class="mdl-button global-button-round sombra">Reviews</button>
           <button class="mdl-button global-button-round sombra">Other services by the same provider</button>
           <button class="mdl-button global-button-round sombra">help</button>

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







</div>
</template>





<script>
import { db } from '../../firebaseConfig.js'


export default {
    name: "Service",
    
    data(){
        return{
           TimelineTab: false,
           aboutTab: true,
           ServiceTab: false,
           HelpTab: false,

           user_id: null,
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
      }


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
