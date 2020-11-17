<template>
<div>



        <div class="global-header mdl-shadow--2dp">

            <div class="global-header-bg">
                <img v-bind:src="userimg">
            </div>

            <div class="global-header-bg-overlay"></div>


            <div class="global-header-edit-button">
                <router-link :to="{ name: 'EditYourAccount', params: {user_id: user_id}}">
                    <i class='uil uil-pen'></i>
                </router-link>
            </div>

                <div class="global-header-img mdl-shadow--2dp">
                <img v-bind:src="userimg">
                </div>

            <h3 class="global-header-title">{{username}}</h3>
            

        </div><!--header-->



       <div class="global-tabs-bar">

        <!---   <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:aboutTab }" v-on:click="ShowAbout">About</button>  --->
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:servicesTab }" v-on:click="ShowServices">All my services</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:questionsTab }" v-on:click="ShowQuestions">Questions asked from my services</button>

       </div><!---options bar-->



       <div id="about" class="global-tab-content" v-if="aboutTab">
           <aboutme/>
       </div><!--about tab-->

       <div id="allmyservices" class="global-tab-content" v-if="servicesTab">
           <allmyservices/>
       </div><!--about tab-->

       <div id="questions" class="global-tab-content" v-if="questionsTab">
           <Questions_from_services/>
       </div><!--reviews tab-->











</div>
</template>


<script>
import Questions_from_services from './ProfileServicesTabs/Questions_from_services.vue'
import aboutme from './ProfileServicesTabs/aboutme.vue'
import allmyservices from './ProfileServicesTabs/allmyservices.vue'

import { firebase, db } from '../../firebaseConfig.js'
export default {
    name: 'ServiceProfile',
    components:{
        Questions_from_services,
        aboutme,
        allmyservices,
    },
    data(){
        return{

            username:null,
            userimg:null,
            useremail:null,
            userphone:null,
            user_id:null,

            aboutTab:false,
            servicesTab: true,
            questionsTab:false,

            
        }
    },
    
    
    
    
    
    beforeCreate(){
             
             let self = this; 
             
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {                       
                    if(snapshot.data().img == ''){
                        self.userimg = 'https://cdn.dribbble.com/users/937082/screenshots/5516643/blob'
                    }
                    else{
                        self.userimg = snapshot.data().img
                    }

                    //console.log(snapshot.data().user_id)

                    self.username = snapshot.data().name
                    self.userphone = snapshot.data().phone
                    self.useremail = snapshot.data().email    
                    self.user_id = snapshot.data().user_id

                    //console.log(self.user_id)
                    
                    if(snapshot.data().AccountType !== 'service'){
                        self.$router.replace('/home')
                    }                             
        })
        
    },



    methods:{

        ShowAbout:function(){
            this.aboutTab = true
            this.servicesTab = false
            this.questionsTab = false
        },

        ShowQuestions:function(){
            this.aboutTab = false
            this.servicesTab = false
            this.questionsTab = true
        },

        ShowServices:function(){
            this.aboutTab = false
            this.servicesTab = true
            this.questionsTab = false
        }

    },
    








}
</script>
