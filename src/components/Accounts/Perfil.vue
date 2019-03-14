<template>
<div id="perfil">





           <div id="perfil-header" class="mdl-shadow--2dp">
              
              <div id="perfil-img" class="mdl-shadow--3dp">
                  <img src="https://cdn.dribbble.com/users/14268/screenshots/3953645/paper.png">
              </div>


              <div id="perfil-header-name">
                  <h3>{{username}}</h3>
              </div>



             <div id="perfil-bottom-row">
                 
                 <div id="perfil-header-bar" class="perfil-bottom-item">
                     <button class="mdl-button" v-on:click="showTimelineTab" v-bind:class="{ tabActive: TimelineTab }">Timeline</button>
                     <button class="mdl-button" v-on:click="showAboutTab" v-bind:class="{ tabActive: aboutTab }">About</button>
                     <button class="mdl-button" v-on:click="showServiceTab" v-bind:class="{ tabActive: ServiceTab }">Services</button>
                     <button class="mdl-button" v-on:click="showHelpTab" v-bind:class="{ tabActive: HelpTab }">Help</button>
                 </div>


             </div><!--perfil bottom row -->
           </div><!---perfil header -->




     
           <div id="perfil-sections-container">


               <div id="perfil-timeline" class="perfil-section" v-if="TimelineTab">

               </div><!--perfil timeline section -->





                 
               <div id="perfil-info" class="perfil-section" v-if="aboutTab">
                 <div id="perfil-info-welcome">
                       
                    <div id="perfil-info-welcome-img">
                       <img src="https://cdn.dribbble.com/users/1461762/screenshots/3826770/missing_summer.png">
                    </div>

                    <div id="perfil-info-welcome-text">
                        <h3>Services Name goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium aliquid neque vitae veritatis deserunt.
                        Doloribus recusandae facilis at natus fugit asperiores unde molestias,
                        aliquam tempore quasi suscipit accusamus incidunt modi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis delectus, et voluptatibus aperiam odit ipsa eveniet
                        ullam quae enim reprehenderit ratione, ipsam exercitationem.
                        Aliquid soluta iste odit obcaecati voluptatibus suscipit.</p>



                        <div id="perfil-info-welcome-details">
                            <div class="perfil-info-welcome-detail">
                                <i class='uil uil-location-point'></i><p>801 Plumb Branch Street Fairmont, WV 26554</p>
                            </div><!--perfil info welcome detail-->
                            <div class="perfil-info-welcome-detail">
                                <i class='uil uil-phone'></i><p>801-123-26554</p>
                            </div><!--perfil info welcome detail-->
                            <div class="perfil-info-welcome-detail">
                                <i class='uil uil-location-point'></i><p>801 Plumb Branch Street Fairmont, WV 26554</p>
                            </div><!--perfil info welcome detail-->
                            <div class="perfil-info-welcome-detail">
                                <i class='uil uil-location-point'></i><p>801 Plumb Branch Street Fairmont, WV 26554</p>
                            </div><!--perfil info welcome detail-->
                            
                        </div><!-- perfil info welcome details-->


                    </div><!--perfil info welcome text-->

                 </div><!---perfil info-welcome-->
               </div><!-- perfil info section-->




























           </div><!--perfil-sections container-->
</div>
</template>



<script>
import firebase,{ firestore } from 'firebase'
export default {
    name: "Perfil",
    data(){
        return{
           username: 'im a user' ,
           TimelineTab: true,
           aboutTab: false,
           ServiceTab: false,
           HelpTab: false,

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
    },

}
</script>







<style scoped>

   #perfil-header{
       width:100%;
       margin:auto;
   }
   #perfil-img{
       border-radius:100px;
       width:200px;
       height: 200px;
       display: inline-block;
       align-self: middle;
       margin: 62px auto auto auto; 
       overflow: hidden;
       object-fit: cover !important;
    }
    #perfil-img img{
        width: 100%;
        height: 100%;
        object-fit: cover !important;
    }

    #perfil-header-name{
        margin:22px auto;
        width:100%;
        justify-content: center;
        align-content: center;
        display: flex;
    }
    #perfil-header-name h3{
        display: inline-block;
        margin:auto;
        align-self: middle;
        justify-self: center;
        padding:8px;
    }




    #perfil-bottom-row{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .perfil-bottom-item{
        display: flex;
        justify-content: center;
        margin:auto;
        align-self: middle;
        justify-self: center;
    }
    
    #perfil-header-bar{
        padding: 22px 0;
    }
    #perfil-header-bar button{
        display: inline-block;
        align-self: middle;
        margin: auto 8px auto 8px;
        border-radius: 100px;
    }
    #perfil-header-bar button:hover{
        background: rgba(87, 85, 217,0.1);
    }
    #perfil-header-bar button:focus{
        background: none
    }







   


   #perfil-sections-container{
       width:100%;
       margin:100px auto auto auto;
       justify-content: center;
       align-content: center;
       padding:0;
   }
   .perfil-section{
       width:100%;
       min-height: 100vh;
       padding:62px 22px;
       align-content: center;
       justify-content: center;
   }
   .tabActive{
       border:solid 0.5px rgba(87, 85, 217,0.2);
  }
  #perfil-header-bar button:hover{
      background: rgba(87, 85, 217,0.1);
  }
  #perfil-header-bar button:focus{
      background: none
  }











  #perfil-info-welcome{
      width:100%;
      padding:22px;
      display: flex;
      justify-content: center;
      align-content: center;
      text-align: left;
  }
  #perfil-info-welcome h3{
      font-size:32px;
      padding:22px;
      margin: auto;
      align-self: middle;
      display: inline-block;
  }
  #perfil-info-welcome p{
      font-size:22px;
      text-align: justify;
      padding:16px;
      margin: auto;
      align-self: middle;
      display: inline-block;
  }

  #perfil-info-welcome-img{
      width:800px;
  }
  #perfil-info-welcome-text{
      padding:52px 32px;
      width:1080px;
  }


  #perfil-info-welcome-details{
      width:70%;
  }
  .perfil-info-welcome-detail{
      display: flex;
      justify-content: center;
      align-content: middle;
      text-align: left;
      width: 400px;
  }
  .perfil-info-welcome-detail p,i{
      font-size:14px !important;
      display: inline-block;
      align-self: middle;
      margin:auto;
      padding: 0 22px;
  }
  .perfil-info-welcome-detail p{
      width:90%;
  }
  .perfil-info-welcome-detail i{
      width:10%;
  }







</style>
