<template>
<div id="perfil" >
<div id="perfil-view" v-for="(user,userData) in userinfo" :key="userData">



           <div id="perfil-header" class="mdl-shadow--2dp">
              
              <div id="perfil-img" class="mdl-shadow--3dp">
                  <img v-bind:src="user.img">
              </div>


              <div id="perfil-header-name">
                  <h3>{{user.name}}</h3>
              </div>



             <div id="perfil-bottom-row">
                 
                 <div id="perfil-header-bar" class="perfil-bottom-item">
                     <button class="mdl-button" v-on:click="showTimelineTab" v-bind:class="{ tabActive: TimelineTab }">Timeline</button>
                     <button class="mdl-button" v-on:click="showAboutTab" v-bind:class="{ tabActive: aboutTab }">About</button>
                     <button class="mdl-button" v-on:click="showServiceTab" v-bind:class="{ tabActive: ServiceTab }" v-if="accountType">Services</button>
                     <button class="mdl-button" v-on:click="showHelpTab" v-bind:class="{ tabActive: HelpTab }" v-if="accountType">Help</button>
                     <button class="mdl-button" v-on:click="showHelpTab" v-bind:class="{ tabActive: HelpTab }" v-if="!accountType">Adquires</button>
                     <button class="mdl-button" v-on:click="showHelpTab" v-bind:class="{ tabActive: HelpTab }" v-if="!accountType">Subscriptions</button>
                 </div>


             </div><!--perfil bottom row -->
           </div><!---perfil header -->




     
           <div id="perfil-sections-container">


               <div id="perfil-timeline" class="perfil-section" v-if="TimelineTab">


                   <div id="perfil-timeline-action-bar">
                       <button class="mdl-button" v-on:click="isPostInMaking = true" v-bind:class="{tabActive: isPostInMaking}">Make a post</button>
                       <button class="mdl-button">im an action</button>
                       <button class="mdl-button">im an action</button>
                   </div>

                   
                  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                   <div id="perfil-timeline-make" v-if="isPostInMaking"> 
                       <div id="perfil-timeline-make-buttonbar">
                          <button id="perfil-timeline-make-leave" class="mdl-button"  v-on:click="isPostInMaking = false">leave</button>
                          <button id="perfil-timeline-make-send" class="mdl-button"  v-on:click="addPost">send</button>
                        </div>
                       <quillEditor id="perfil-timeline-make-editor" v-model="postsContent"/>
                   </div><!---perfil timeline make-->
                  </transition>




                    <div id="perfil-timeline-posts">
                        <div class="perfil-timeline-post mdl-shadow--2dp" v-for="(post,timelinePostsData) in timelinePosts" :key="timelinePostsData">


                            <div class="post-header">
                                <div class="post-header-img">
                                    <img v-bind:src="user.img">
                                </div>
                                <div class="post-header-text">
                                    <h5>{{user.name}}</h5>
                                    <small>time 10ms ago</small>
                                </div>
                            </div><!--post header-->



                            <div class="post-content" v-html="post.content">
                            </div><!--post content-->



                            <div class="post-footer">
                                <div class="post-footer-top">
                                    <div class="post-footer-likes">
                                        <i class='uil uil-thumbs-up'></i>
                                    </div>
                                    <div class="post-footer-comments">
                                        <i class='uil uil-comment'></i>
                                    </div>
                                </div><!--footer header-->


                                <div class="post-footer-middle">
                                    <input type="text" placeholder="leave a comment">
                                </div><!--footer middle-->
                            </div><!--post footer-->


                        </div><!-- perfil timeline post-->
                    </div><!--perfil timeline posts-->



               </div><!--perfil timeline section -->





                 
               <div id="perfil-info" class="perfil-section" v-if="aboutTab">

                <div id="service-view" v-if="accountType">
                   <div id="perfil-info-serviceimg">
                       <div id="perfil-info-img-bg"  v-bind:style="{ backgroundImage: 'url(' + user.serviceimg + ')' }"></div>

                       <div id="perfil-info-img" class="mdl-shadow--16dp">
                           <img v-bind:src="user.serviceimg">
                       </div>

                       <div id="perfil-info-add-a-detail" class="mdl-shadow--8dp"><i class='uil uil-plus'></i></div>
                   </div><!--perfil info img-->
                   
                   <h1>{{user.servicename}}</h1>
                   <p>{{user.servicedescription}}</p>

                       
                       <div id="perfil-info-details" class="mdl-grid">
                           
                           <div class="perfil-detail">
                               <i class='uil uil-map-marker-alt'></i><p>{{user.phone}}</p>
                           </div>

                           <div class="perfil-detail">
                               <i class='uil uil-schedule'></i><p>{{user.phone}}</p>
                           </div>
                           <div class="perfil-detail">
                               <i class='uil uil-envelope-alt'></i><p>{{user.email}}</p>
                           </div>

                           <div class="perfil-detail">
                               <i class='uil uil-phone-alt'></i><p>{{user.phone}}</p>
                           </div>
                           <div class="perfil-detail">
                               <i class='uil uil-phone-alt'></i><p>{{user.phone}}</p>
                           </div>

                           <div class="perfil-detail">
                               <i class='uil uil-phone-alt'></i><p>{{user.phone}}</p>
                           </div>                           
                       </div>
                </div><!--service view-->




                <div v-if="!accountType">
                       <div id="perfil-info-details2" class="mdl-grid">
                           
                           <div class="perfil-detail">
                               <i class='uil uil-envelope-alt'></i><p>{{user.email}}</p>
                           </div>

                           <div class="perfil-detail">
                               <i class='uil uil-phone-alt'></i><p>{{user.phone}}</p>
                           </div>                           
                       </div>                    
                </div><!--client view-->


               </div><!-- perfil info section-->






              <div id="perfil-services" class="perfil-section" v-if="ServiceTab">
                  <Services/>
              </div>




















           </div><!--perfil-sections container-->
</div><!--perfil view -->           
</div>
</template>



<script>
import { firebase, db } from '../../firebaseConfig.js'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

import Services from '../Modules/Services.vue'

export default {
    name: "Perfil",
    components:{
        quillEditor,
        Services,
    },
    data(){
        return{
           TimelineTab: true,
           aboutTab: false,
           ServiceTab: false,
           HelpTab: false,
           isPostInMaking: false,

           userinfo:[],


           postsContent:'',

           accountType:false,

           


           timelinePosts:[
               {content: 'hi, im a post, to make more like me hit on make a post button'},

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


        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {           
                //console.log('Document data:', snapshot.data());
                const data ={
                    'img': snapshot.data().img,
                    'name': snapshot.data().name,
                    'phone': snapshot.data().phone,
                    'email': snapshot.data().email,
                    'serviceimg': snapshot.data().serviceimg,
                    'servicename': snapshot.data().servicename,
                    'servicedescription': snapshot.data().servicedescription,
                }
                self.userinfo.push(data)
        }),
        
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {           
          // console.log(snapshot.data().servicedescription)

                    if(snapshot.data().AccountType == 'service'){
                        self.accountType = true
                    }
                    else if(snapshot.data().AccountType == 'client'){
                        self.accountType = false
                    }
             
        })




    }
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
        overflow: hidden;
        white-space: nowrap;
        overflow-y: auto;
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
        margin: auto;
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







 



  

  #perfil-timeline-action-bar{
      margin: -112px auto auto auto;
      width:100%;
      overflow: hidden;
      white-space: nowrap;
  }
  #perfil-timeline-action-bar button{
      margin: auto;
      border-radius: 100px;
  }


  #perfil-timeline-make{
      width:90%;
      margin:14% auto;
      position: fixed;
      top:0;
      left:0;
      right:0;
      box-shadow: 0 0 22000px 22000px rgba(0,0,0,0.7);
      background: rgba(0,0,0,0.5);
  }
  #perfil-timeline-make-editor{
      background: white;
  }
  #perfil-timeline-make-buttonbar{
      display: flex;
      width:100%;
      background: rgba(0,0,0,0.4);
      justify-content: space-between;
      margin:auto;
      padding:22px;
  }
  #perfil-timeline-make-buttonbar button{
      margin:auto;
      align-self: middle;
      display: inline-block;
  }
  #perfil-timeline-make-leave{
      border-radius:100px;
      background: orangered;
  }
  #perfil-timeline-make-send{
      border-radius:100px;
      background: limegreen;
  }



  #perfil-timeline-posts{
      width:100%;
      margin:100px auto auto auto;
  }
  .perfil-timeline-post{
      width:100%;
      margin: auto auto 52px auto;
      min-height: 100px;
  }
  .post-header{
      width: 100%;
      display: flex;
      border-bottom: solid 0.5px rgba(0,0,0,0.2);
      padding: 14px;
  }
  .post-header-img{
      width:80px !important;
      height:80px !important;
      border-radius: 100px;
      overflow: hidden;
      margin: auto 22px auto auto;
      align-self: middle;
      display: inline-block;
  }
  .post-header-img img{
      width:100%;
      height: 100%;
      object-fit: cover;
  }
  .post-header-text{
      margin: auto;
      align-self: middle;
      display: inline-block;
      text-align: left;
      width:90%;
  }
  .post-header-text h5{
      font-size:18px;
  }
  .post-header-text small{
      font-size:12px;
  }
  .post-content{
      padding:58px 26px;
      text-align: left;
  }
  .post-footer{
      width:100%;
      border-top: solid 0.5px rgba(0,0,0,0.2);
      padding: 22px 0;
  }
  .post-footer-top{
      display: flex;
      justify-content: center;
      width:100%;
      padding: 10px 0;
  }
  .post-footer-likes , .post-footer-comments{
      display: flex;
      justify-content: center;
      margin:auto;
      align-self: middle;
      width:100%;
  }
  
  .post-footer-middle{
      width:100%;
      padding:22px 0;
  }
  .post-footer-middle input{
      width:95%;
      margin:auto;
      padding:22px;
      border:none;
      border-bottom:solid thin rgba(0,0,0,0.4);
      outline:none;
  }










  #perfil-info-serviceimg{
      width:100%;
      height: 64vh;
      overflow: hidden;
      margin:auto;
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
  }
  #perfil-info-img-bg{
      position: absolute;
      width:inherit;
      height: inherit;
      z-index: -1;
      filter: blur(12px);
      transform: scale(1.1);
      top: 0;
      left: 0;
      right: 0;
      box-shadow: inset 0 0 22000px 22000px rgba(0,0,0,0.3);
      background-size:cover;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position: center;
  }

  #perfil-info-img{
      width:300px;
      height: 300px;
      overflow: hidden;
      margin:auto;
      z-index: 2;
      border-radius: 300px;
      align-self: middle;
  }
  #perfil-info-img img{
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  #perfil-info-add-a-detail{
      position:absolute;
      background:gray;
      bottom:0;
      left: 0;
      margin: auto auto 22px 22px;
      border-radius: 100px;
      width:40px;
      height:40px;
      justify-content: center;
      align-content: middle;
      display: flex;
      cursor: pointer;
  }
  #perfil-info-add-a-detail i{
      align-self: middle;
      justify-self: center;
      margin:auto;
      font-size:20px;
  }

  #perfil-info h1{
      margin:auto;
      padding:42px 0;
  }
  #perfil-info p{
      margin:auto;
  }
  #perfil-info-details{
      width:100%;
      margin:auto;
      padding: 62px 22px;
      justify-content: center !important;
      align-content: center !important;
  }
  #perfil-info-details2{
      width:100%;
      margin: -32px auto auto auto;
      justify-content: center !important;
      align-content: center !important;
  }
  .perfil-detail{
      display: flex;
      align-content: center;
      width:400px;  
      justify-content: center;
      margin:16px;
      align-self: center;
      padding:22px;
      border-radius:100px;
      border: solid 0.5px rgba(0,0,0,0.1);
  }
  .perfil-detail i,p{
      margin:auto;
      align-self: middle;
      display: inline-block;
  }
  .perfil-detail i{
      width:30%;
      text-align: left;
  }
  .perfil-detail p{
      text-align: left;
      width:90%;
  }





 







</style>
