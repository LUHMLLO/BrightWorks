<template>
<div>



        <div class="global-header mdl-shadow--2dp">

            <div class="global-header-bg">
                <img v-bind:src="userimg">
            </div>

            <div class="global-header-bg-overlay"></div>


            <div class="global-header-edit-button">
                <router-link :to="{ name: 'EditYourAccount' , params: {user_id: user_id}}">
                    <i class='uil uil-pen'></i>
                </router-link>
            </div>

                <div class="global-header-img mdl-shadow--2dp">
                <img v-bind:src="userimg">
                </div>

            <h3 class="global-header-title">{{username}}</h3>
            

        </div><!--header-->



       <div class="global-tabs-bar">

           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:aboutTab }" v-on:click="showAbout">About</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:adquiredTab }" v-on:click="showAdquired">Adquired services</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:subscriptionsTab }" v-on:click="showSubscriptions">Subscriptions</button>
           <button class="mdl-button global-button-round sombra" v-bind:class="{globalActiveTab:reviewsTab }" v-on:click="showReviews">Made reviews</button>

       </div><!---options bar-->










       <div id="about" class="global-tab-content" v-if="aboutTab">
           <h1>about</h1>
       </div><!--about tab-->

       <div id="adquired" class="global-tab-content" v-if="adquiredTab">
           <AdquiredServices/>
       </div><!--about tab-->

       <div id="subscriptions" class="global-tab-content" v-if="subscriptionsTab">
           <h1>subscription</h1>
       </div><!--reviews tab-->

       <div id="reviews" class="global-tab-content" v-if="reviewsTab">
           <h1>reviews</h1>
       </div><!--reviews tab-->       













</div>
</template>


<script>
import { firebase, db } from '../../firebaseConfig.js'
import AdquiredServices from './ClientTabs/AdquiredServices.vue'

export default {
    name: 'ClientProfile',
    components:{
        AdquiredServices,
    },
    data(){
        return{

            username:null,
            userimg:null,
            useremail:null,
            userphone:null,
            user_id:null,


            aboutTab:true,
            adquiredTab:false,
            subscriptionsTab:false,
            reviewsTab:false,

            
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

                    self.username = snapshot.data().name
                    self.userphone = snapshot.data().phone
                    self.useremail = snapshot.data().email  
                    self.user_id = snapshot.data().user_id

                    //console.log(self.user_id)
                    
                    if(snapshot.data().AccountType !== 'client'){
                      self.$router.replace('/home')
                    } 
        })
        
    },



    methods:{

       
        showAbout:function(){
            this.aboutTab = true
            this.adquiredTab = false
            this.subscriptionsTab = false
            this.reviewsTab = false
        },
        showAdquired:function(){
            this.aboutTab = false
            this.adquiredTab = true
            this.subscriptionsTab = false
            this.reviewsTab = false
        },
        showSubscriptions:function(){
            this.aboutTab = false
            this.adquiredTab = false
            this.subscriptionsTab = true
            this.reviewsTab = false
        },
        showReviews:function(){
            this.aboutTab = false
            this.adquiredTab = false
            this.subscriptionsTab = false
            this.reviewsTab = true
        },


    }








}
</script>
