<template>
  <div id="cover">






    <div id="cover-header">
      <div id="cover-header-content">
        
        <h1>Bright Works</h1>        
        <p>Make the right choices.</p>
        <br>



        <router-link to="/login">
          <button class="global-button mdl-button mdl-shadow--2dp">Sign in</button>
        </router-link>

        <router-link to="/signup">
          <button class="global-button mdl-button mdl-shadow--2dp">Sign up</button>
        </router-link>
      </div>
    </div><!--cover header ends herer--->
















  <div id="cover-tabs">

      <div id="cover-tabs-nav">
        <button class="mdl-button" v-on:click="showTab0" v-bind:class="{ tabActive: isTab0Visible }">About BrightWorks</button>
        <button class="mdl-button" v-on:click="showTab1" v-bind:class="{ tabActive: isTab1Visible }">How it Works</button>
        <button class="mdl-button" v-on:click="showTab2" v-bind:class="{ tabActive: isTab2Visible }">Services</button>
        <button class="mdl-button" v-on:click="showTab3" v-bind:class="{ tabActive: isTab3Visible }">Features</button>
      </div>
      <br>
      <br>

    <transition name="coverTabsAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
     <div id="about-tab" class="cover-tabs-section" v-if="isTab0Visible">


          <div id="about-img">
             <img src="../../assets/logo.png">
          </div>

        <p style="text-align:justify; padding: 22px; margin:auto;">
          Bright works is a work platform where people can find and hire different services depending on what they need, without wasting a lot of time carrying out extensive searches or taking risks with services that do not have as much credibility, all this from any mobile device with Internet connection;
           <br>
          Bright works seeks to serve as home for those who wish to have a work platform to provide, promote and manage their business / service that they wish to provide, facilitating the acquisition of clients and also allowing them to manage their work from it, without requiring a very extensive learning curve but that meets the necessary functionalities to be useful.
        </p>

     </div>
    </transition>

    
    <transition name="coverTabsAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
     <div id="cover-howitworks-tab" class="cover-tabs-section" v-if="isTab1Visible">
  

        <div class="how-it-works-item">
           <div class="how-it-works-item-img mdl-shadow--2dp">
             <img src="https://cdn.dribbble.com/users/302065/screenshots/5094907/search_gale.gif">
           </div>
           
           <h3>Search</h3>
           <p>Look for the most suitable option.</p>
         </div>

         <div class="how-it-works-item">
           <div class="how-it-works-item-img mdl-shadow--2dp">
             <img src="https://cdn.dribbble.com/users/729829/screenshots/3975065/galshir-click-lemonade.gif">
           </div>

           <h3>Click</h3>
           <p>Select only the best.</p>
         </div>

         <div class="how-it-works-item">
           <div class="how-it-works-item-img mdl-shadow--2dp">
             <img src="https://cdn.dribbble.com/users/729829/screenshots/3986782/galshir-design-your-week.gif">
           </div>

           <h3>Book</h3>
           <p>As easy as it sounds.</p>
         </div>
          
         <div class="how-it-works-item">
           <div class="how-it-works-item-img mdl-shadow--2dp">
             <img src="https://cdn.dribbble.com/users/1813781/screenshots/5579105/okaymonday_meeditation_girl.gif">
           </div>

           <h3>Relax</h3>
           <p>No need for stress.</p>
         </div>

     </div>
    </transition>


    <transition name="coverTabsAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
      <div id="cover-services-tab" class="cover-tabs-section" v-if="isTab2Visible">
            <div class="global-grid">

                <div class="service" v-for="(service,servicesData) in services" :key="servicesData">
                  <div class="service-img mdl-shadow--4dp">
                     <img v-bind:src="service.img">
                  </div>
                  <div class="service-name">
                    <h4>{{service.name}}</h4>
                  </div>
                </div><!-- this col ends here-->
        

            </div>
      </div><!--tab ends here-->
    </transition>
     

    <transition name="coverTabsAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
     <div id="cover-features-tab" class="cover-tabs-section" v-if="isTab3Visible">
       <div class="global-grid">


           <div class="feature" v-for="(feature,featuresData) in features" :key="featuresData">
             <div class="feature-img">
               <img v-bind:src="feature.img">
             </div><!---feature img-->

             <div class="feature-content">
               <h3>{{feature.name}}</h3>
               <div class="feature-text">
                 <p>{{feature.content}}</p>
               </div>
             </div>


           </div><!---feature container -->
       </div>
     </div><!-- cover features tab ends here-->
    </transition>

    



  </div><!-- cover tabs ends here -->















   <div class="global-quotes-slider">
    
    <div v-for="(quote, InspQuotesData) in InsQuotes" :key="InspQuotesData" class="global-quote">
        <h6>"{{quote.content}}"</h6>
        <br>
        <small>- {{quote.author}}</small>
    </div>
    
   </div>



   







   <div id="cover-cards">
     <h4>A little more about BrightWorks</h4> 
     <div class="global-grid">


     <div class="cover-card">
       <div class="cover-card-img">
         <img src="https://cdn.dribbble.com/users/791530/screenshots/5660599/icons8_connection_lost_illustration.png">
       </div>
       <!----->
       <div class="cover-card-text">
         <h3>Mission</h3>
         <p>Offer people a service in an innovative way to help start your business.</p>
       </div>
     </div><!--cover card-->


     <div class="cover-card">
       <div class="cover-card-text">
         <h3>Vision</h3>
         <p>Maintain leadership in the market and evolve as a leader in services and helping people to promote their business.</p>
       </div>
       <!----->
       <div class="cover-card-img">
         <img src="https://cdn.dribbble.com/users/412478/screenshots/3673636/creative_dribble-08.png">
       </div>
     </div><!--cover card-->      


     <div class="cover-card">
       <div class="cover-card-img">
         <img src="https://cdn.dribbble.com/users/2323077/screenshots/4625711/01_jira-illos.png">
       </div>
       <!----->
       <div class="cover-card-text">
         <h3>Values</h3>
        <p>Customer Satisfaction; Creativity; Leadership.</p>
       </div>
     </div><!--cover card-->





     </div>
   </div><!---cover cards ends here-->










   <div id="cover-demo" class="global-grid" v-if="hidethisfornow">
     <div id="cover-demo-window" class="mdl-cell  mdl-shadow--6dp">


      <div id="cover-demo-window-sidebar" class="mdl-shadow--2dp">

      </div><!--cover demo window sidebar-->


      <div id="cover-demo-window-content">
        <br><br><br><br><br><br>
        <h1>Under Construction</h1>
      </div><!--cover demo window content-->





     </div>
   </div><!--cover demo window ends here-->

















  </div>
</template>

<script>
export default {
  name: "Cover",
  data() {
    return {

      hidethisfornow: false,



       features:[
         {
         name:'Secure data', 
         content:'Your data stays in the platform and no where else.',
         img:'https://cdn.dribbble.com/users/1803663/screenshots/5268088/farmhouse1.png'
         },
         
         {
           name:'Easy to use',
           content:'Not time to lose with extensive learning curves.',
           img:'https://cdn.dribbble.com/users/1803663/screenshots/5301137/image.png'
         },
         
         {
           name:'Accessible',
           content:'Access to your platform from anywhere as long as you have internet.',
           img:'https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png'
         },

         {
          name:'Secure payments', 
          content:'Every payments within the platform apply for refund.',
          img:'https://cdn.dribbble.com/users/1803663/screenshots/5268088/farmhouse1.png'
         },
         
         {
           name:'Organize',
           content:'Keep track of your work and schedule.',
           img:'https://cdn.dribbble.com/users/1803663/screenshots/5188624/cape-mudge-lighthouse..png'
         },
         
         {
           name:'Increased renevue',
           content:'Increase your income by expanding your borders.',
           img:'https://cdn.dribbble.com/users/1803663/screenshots/5371625/lighthouse_bovbjerg-lighthouse.png'
         },
         
         {
           name:'Cost efficient',
           content:'Do more for less.',
           img:'https://cdn.dribbble.com/users/1803663/screenshots/6080532/kerala_paddy_field.png'
         },
         
         {
           name:'Free publicity',
           content:'As long as you do a great work everyone will hear about you',
           img:'https://cdn.dribbble.com/users/1803663/screenshots/6149997/nature-3.png'
         },
         
         {
           name:'World wide clients',
           content:'Get clients from all over the planet',
           img:'https://cdn.dribbble.com/users/63407/screenshots/4828797/dribbble_tea_medows.png'
         },
         
         {
           name:'Simple Booking',
           content:'Make appointments with just a couple of clicks',
           img:'https://cdn.dribbble.com/users/63407/screenshots/5877615/dribbble_india_stories_detail.png'
         },
         
         {
           name:'Manage your incoming',
           content:'Track your earnings and learn how to improve them',
           img:'https://cdn.dribbble.com/users/63407/screenshots/5095176/dribbble_lotus_pond.png'
         },
         {
           name:'Schedule friendly',
           content:'Work at the time that best suits you',
           img:'https://cdn.dribbble.com/users/63407/screenshots/5095176/dribbble_lotus_pond.png'
         },
       ],
       
        isTab0Visible: true,
        isTab1Visible: false,
        isTab2Visible: false,
        isTab3Visible: false,

         services:[
           {img:'https://cdn.dribbble.com/users/94074/screenshots/3647324/the_guardian__crop_.jpg',name:'Gardening'},
           {img:'https://cdn.dribbble.com/users/63407/screenshots/5462636/dribbble_taxi_cab_ride.png',name:'Uber/Cab'},
           {img:'https://cdn.dribbble.com/users/788099/screenshots/4329668/soldering_iron_electronics_kit8-net.png',name:'Technician'},
           {img:'https://cdn.dribbble.com/users/788099/screenshots/3547692/barbecue_kit8-net.png',name:'Cooking'},
           {img:'https://cdn.dribbble.com/users/1771554/screenshots/5205318/1_style_dribbble.jpg',name:'Develope'},
           {img:'https://cdn.dribbble.com/users/418188/screenshots/6005129/information_architecture_illustration_tubik.png',name:'Architecture'},
           {img:'https://cdn.dribbble.com/users/418188/screenshots/5381692/design_workspace_illustration_tubik.png',name:'Design'},
           {img:'https://cdn.dribbble.com/users/21928/screenshots/4051365/screen_shot_2017-12-28_at_3.27.52_pm.png',name:'Plumbing'},
           {img:'https://cdn.dribbble.com/users/103909/screenshots/3671664/sensors-01.jpg',name:'Entrepreneur'},
           
         ],


         InsQuotes:[
           {'content': 'Without hard work, nothing grows but weeds.', 'author':'Gordon B. Hinckley.'},
           {'content': 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.' ,'author':'Pele.'},
           {'content': 'Be true to your work, your word, and your friend.', 'author':'John Boyle O Reilly.'},
           {'content': 'Nothing ever comes to one, that is worth having, except as a result of hard work.', 'author': 'Booker T. Washington.'},
           {'content': 'If you do what you love, youll never work a day in your life.', 'author':'Marc Anthony.'},
           {'content' :'There is no higher religion than human service. To work for the common good is the greatest creed.', 'author': 'Woodrow Wilson.'},
         ],



    }
  },




  methods:{
    showTab0:function(){
      this.isTab0Visible = true
      this.isTab1Visible = false
      this.isTab2Visible = false
      this.isTab3Visible = false
    },
    showTab1:function(){
      this.isTab0Visible = false
      this.isTab1Visible = true
      this.isTab2Visible = false
      this.isTab3Visible = false
    },
    showTab2:function(){
      this.isTab0Visible = false
      this.isTab1Visible = false
      this.isTab2Visible = true
      this.isTab3Visible = false
    },
    showTab3:function(){
      this.isTab0Visible = false
      this.isTab1Visible = false
      this.isTab2Visible = false
      this.isTab3Visible = true
    },

  },




};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');

#cover-header {
  background: url("https://cdn.dribbble.com/users/1803663/screenshots/6080532/kerala_paddy_field.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-shadow: inset 0 0 100px 2200px rgba(0, 0, 0, 0.5);
  align-content: middle;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding:22px;
}
#cover-header-content {
  margin: auto  ;
  align-self: middle;
  color: white;
}
#cover-header-content button {
  color: white;
  border-radius: 100px;
  margin: 10px 10px;
}
#cover-header-content h1{
  font-family: 'Pacifico', cursive;
  font-size:62px;
}
#cover-header-content p{
  margin: auto;
}




#cover-tabs{
  width: 100%;
  padding:42px 0;
}
#cover-tabs-nav{
  width:95%;
  margin:auto;
  padding:22px 0;
  border-bottom: solid 0.5px rgba(0, 0, 0, 0.3);
}
#cover-tabs-nav button{
  border-radius: 100px;
  margin: auto 5px auto 5px;
}
.cover-tabs-section{
  padding: 52px 22px;
}
.coverTabsAnim-leave-active{
  transition: all 0s !important;
  opacity: 0 !important;
}
.coverTabsAnim-leave-to{
  transition: all 0s !important;
  opacity: 0 !important;
}



#about-img{
  width:348px;
  margin:auto;
}

.how-it-works-item{
  width:100%;
  margin: auto auto 100px auto;
}
.how-it-works-item-img{
  width: 80%;
  height: 300px;
  margin: auto;
  border-radius:30px;
  overflow: hidden;
}
.how-it-works-item-img img{
  width:100%;
  height: 100%;
}
.how-it-works-item i{
  margin:auto;
  display: block;
  align-self: middle;
  justify-self: center;
  font-size:40px;
  padding:22px;
}
.how-it-works-item h3{
  margin:auto;
  display: block;
  align-self: middle;
  justify-self: center;
  font-size:28px;
  padding:22px 0;
}
.how-it-works-item p{
  margin:auto;
  display: block;
  align-self: middle;
  justify-self: center;
  font-size:16px;
  padding-bottom:22px;
}


.service{
  width: 230px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 42px;
}
.service-img{
  border-radius:100px;
  width:200px;
  height: 200px;
  display: inline-block;
  align-self: middle;
  margin:auto;
  overflow: hidden;
}
.service-img img{
  width: 100%;
  height: 100%;
}
.service-name{
  display: inline-block;
  align-self: middle;
  margin:16px auto auto auto;
}



 .feature{
   display: flex;
   width: 400px;
   margin:32px;
   justify-content: center;
 }
 .feature-img{
   width:100px;
   height: 100px;
   overflow: hidden;
   border-radius: 100px;
   display: inline-block;
   margin:auto 22px auto auto;
   align-self: middle;
 }
 .feature-img img{
   width:100%;
   height: 100%;
 }
 .feature-content{
   width: 60%;
   display: inline-block;
   margin:auto;
   align-self: middle;
   text-align: left
 }
 .feature-content h3{
   display: inline-block;
   margin:auto;
   align-self: middle;
   font-size:18px;
   padding: 10px 0;
 }
 .feature-text p{
   font-size:12px;
   display: inline-block;
   margin:auto;
   align-self: middle;
 }



#cover-cards{
  padding:100px 0;
}
#cover-cards h4{
  padding:42px 22px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  margin:auto auto 100px auto;
  align-self: middle;
  width:90%;
}

.cover-card{
  width:100%;
  display: flex;
  margin: 22px auto;
  justify-content: space-between;
  align-content: middle;
  padding: 0;
}
.cover-card-img{
  width:50%;
  margin:auto;
  align-self: middle;
}
.cover-card-img img{
  width: 100%;
  height: 100%;
}
.cover-card-text{
  width: 50%;
  margin:auto;
  align-self: middle;
}
.cover-card-text h3{
  font-size:42px;
  margin: auto;
  padding:22px 0;
}
.cover-card-text p{
  font-size:16px;
  margin: auto;
  padding: 22px;
}





#cover-demo{
  min-height: 100vh;
  background: url('https://cdn.dribbble.com/users/63407/screenshots/5389952/dribbble_gap_geneome_invision.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
}
#cover-demo-window{
  overflow: hidden;
  min-height: 780px;
  width:1080px;
  background:white;
  margin:auto;
  align-self: middle;
  justify-self: center;
  border-radius: 10px;
  position: relative;
}
#cover-demo-window-sidebar{
  width:16%;
  height: 100%;
  background:black;
  position: absolute;
  top:0;
  left: 0;
}
</style>
