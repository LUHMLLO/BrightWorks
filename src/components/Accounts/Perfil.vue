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


                   <div id="perfil-timeline-action-bar">
                       <button class="mdl-button" v-on:click="isPostInMaking = true" v-bind:class="{tabActive: isPostInMaking}">Make a post</button>
                       <button class="mdl-button">im an action</button>
                       <button class="mdl-button">im an action</button>
                       <button class="mdl-button">im an action</button>
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
                                    <img src="https://cdn.dribbble.com/users/1461762/screenshots/3795063/google_material_illustration.png">
                                </div>
                                <div class="post-header-text">
                                    <h5>user name</h5>
                                    <small>time 10ms ago</small>
                                </div>
                            </div><!--post header-->



                            <div class="post-content" v-html="post.content">
                            </div><!--post content-->



                            <div class="post-footer">
                                <div class="post-footer-top">
                                    <div class="post-footer-likes">
                                        <i class='uil uil-thumbs-up'></i> <small>12 likes</small>
                                    </div>
                                    <div class="post-footer-comments">
                                        <i class='uil uil-comment'></i> <small> 22 comments</small>
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






              <div id="perfil-services" class="perfil-section" v-if="ServiceTab">
                  <Services/>
              </div>




















           </div><!--perfil-sections container-->
</div>
</template>



<script>
const firebaseInit = require('../../firebaseInit.js')
import db from '../../firebaseInit.js'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

import Services from '../Modules/Services.vue'


import firebase,{ firestore } from 'firebase'
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


           postsContent:'',

           


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
        db.collection('users').doc(firebase.auth().currentUser.uid,).get().then
        (querySnapshot => {
            const data = {
                username: doc.data().name,
            }
        })
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







 



  

  #perfil-timeline-action-bar{
      margin: -112px auto auto auto;
      width:100%;
  }
  #perfil-timeline-action-bar button{
      margin: auto 22px auto 22px;
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
      width:80%;
      margin:100px auto auto auto;
      padding:22px;
  }
  .perfil-timeline-post{
      width:800px;
      margin: auto auto 52px auto;
      min-height: 100px;
  }
  .post-header{
      width: 100%;
      display: flex;
      border-bottom: solid 0.5px rgba(0,0,0,0.2);
      padding: 10px 0 10px 0;
  }
  .post-header-img{
      width:80px;
      height:80px;
      border-radius: 100px;
      overflow: hidden;
      margin: auto;
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
      width:76%;
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
      justify-content: space-between;
      width:100%;
      padding: 10px 0;
  }
  .post-footer-likes , .post-footer-comments{
      display: flex;
      justify-content: space-between;
      margin:auto;
      align-self: middle;
  }
  .post-footer-middle{
      width:100%;
      padding:22px 0;
  }
  .post-footer-middle input{
      width:400px;
      margin:auto;
      padding:22px;
      border:none;
      border-bottom:solid thin rgba(0,0,0,0.4);
      outline:none;
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
