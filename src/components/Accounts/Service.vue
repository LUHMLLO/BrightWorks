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
           <button class="mdl-button global-button-round sombra">Services</button>
           <button class="mdl-button global-button-round sombra">Contact</button>
           <button class="mdl-button global-button-round sombra">Reviews</button>
           <button class="mdl-button global-button-round sombra">Portfolio</button>

       </div><!---options bar-->




        
        <div id="about" class="global-tab-content" v-if="aboutTab">

         <div id="about-presentation">
             <h3>{{servicename}}</h3>
             <p>{{servicedescription}}</p>
         </div>


         <div class="mdl-grid">
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
           serviceimg: null,
           servicename: null,
           servicedescription: null,

           serviceDetails:[
               { 'icon': 'uil uil-phone-alt', 'detail': '809-345-9090'},
               { 'icon': 'uil uil-envelope-alt', 'detail': 'service@something.com'},
               { 'icon': 'uil uil-map-pin-alt', 'detail': 'location somewhere'},
               { 'icon': 'uil uil-folder-info', 'detail': 'idkwatelse'},
           ],



        }
    },
    
 


    beforeRouteEnter( to, from, next){        
          db.collection('users').where('user_id' , '==' , to.params.userid).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              next(vm => {
                    vm.user_id = doc.data().user_id
                    vm.serviceimg = doc.data().serviceimg
                    vm.servicename = doc.data().servicename
                    vm.servicedescription = doc.data().servicedescription
                    vm.email = doc.data().email
                    vm.phone = doc.data().phone

              })
            })
          })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData (){
        db.collection('users').where('user_id', '==' , this.$route.params.userid).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.user_id = doc.data().user_id
                    this.serviceimg = doc.data().serviceimg
                    this.servicename = doc.data().servicename
                    this.servicedescription = doc.data().servicedescription
                    this.email = doc.data().email
                    this.phone = doc.data().phone
          })
        })
      }


    },
}
</script>



<style scoped>

  
  #about-presentation{
      text-align: justify;
  }



</style>
