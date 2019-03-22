<template>
<div>           

      
      <div class="global-header mdl-shadow--2dp">

          <div class="global-header-bg">
              <img src="https://cdn.dribbble.com/users/1908682/screenshots/6219500/___________-_______-3.jpg">
          </div>

          <div class="global-header-bg-overlay"></div>

          <div class="global-header-img mdl-shadow--2dp">
              <img src="https://cdn.dribbble.com/users/1908682/screenshots/6219500/___________-_______-3.jpg">
          </div>


          <h3 class="global-header-title">Im a service</h3>
          

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
             <h3>Im a service</h3>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At consequuntur nisi dolorum minima suscipit iure, veritatis adipisci? Repellat veniam qui aliquam dolor animi laudantium eum eaque nobis? Dicta, sed aut.</p>
         </div>


         <div class="mdl-grid">
             <div class="global-info-pill">
                <i class='uil uil-umbrella'></i>
                <span>this is an info detail pill</span>
             </div><!--global info pill-->
         </div>  
            
        </div><!---global tab content-->






     





























</div>
</template>





<script>
import { firebase, db } from '../../firebaseConfig.js'
import Services from '../Modules/Services.vue'

export default {
    name: "Service",
    components:{
        Services,
    },
    data(){
        return{
           TimelineTab: false,
           aboutTab: true,
           ServiceTab: false,
           HelpTab: false,

           userinfo:[],
           servicename:'green light',         


           timelinePosts:[
               {content: 'hi, im a post'},

           ],

        }
    },
    
    methods:{

        showTimelineTab: function(){
           this.TimelineTab = true
           this.aboutTab = false
           this.ServiceTab = false
           this.HelpTab = false
        },
        showAboutTab: function(){
           this.TimelineTab = false
           this.aboutTab = true
           this.ServiceTab = false
           this.HelpTab = false
        },
        showServiceTab: function(){
           this.TimelineTab = false
           this.aboutTab = false
           this.ServiceTab = true
           this.HelpTab = false
        },
        showHelpTab: function(){
           this.TimelineTab = false
           this.aboutTab = false
           this.ServiceTab = false
           this.HelpTab = true
        },


         addPost() {
            this.timelinePosts.push({content:this.postsContent});
            this.postsContent = '';
        },



    },


    created(){
         let self = this;   
        //this.user = firebase.auth().currentUser
        //var usercollection = this.userinfo
        
          db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data().name) 
                 const data ={
                    'serviceimg': doc.data().serviceimg,
                    'servicename': doc.data().servicename,
                    'servicedescription': doc.data().servicedescription,
                    'email': doc.data().email,
                    'phone': doc.data().phone,
                 }

                 if(doc.data().servicename == this.servicename){
                   self.userinfo.push(data)
                 }
            })
          });




    },
}
</script>



<style scoped>

  
  #about-presentation{
      text-align: justify;
  }



</style>
