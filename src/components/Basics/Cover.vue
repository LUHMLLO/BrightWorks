<template>
  <div id="cover">






    <div id="cover-header">
      <div id="cover-header-content">
        <h1>Bright Works</h1>

        <p>A work and bussiness promoting platform with powerful tools to adquire clients and manage your work all in one place;
          <br>A better way to connect people with the fittest and most qualified for work they might need them.
        </p>

        <router-link to="/login">
          <button class="mdl-button">Sign in</button>
        </router-link>

        <router-link to="/signup">
          <button class="mdl-button">Sign up</button>
        </router-link>
      </div>
    </div><!--cover header ends herer--->
















  <div id="cover-tabs">

      <div id="cover-tabs-nav">
        <button class="mdl-button" v-on:click="showTab1" v-bind:class="{ tabActive: isTab1Visible }">How it Works</button>
        <button class="mdl-button" v-on:click="showTab2" v-bind:class="{ tabActive: isTab2Visible }">Services</button>
        <button class="mdl-button" v-on:click="showTab3" v-bind:class="{ tabActive: isTab3Visible }">Features</button>
      </div>
      <br>
      <br>
    
    <transition name="coverTabsAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
     <div id="cover-howitworks-tab" class="cover-tabs-section" v-if="isTab1Visible">
       <h3>how it works</h3>
       <h2>Click</h2>
          <p>star earning benefit with one click.</p>
       <h2>BOOK</h2>
          <p>No bidding, haggling, or wating for calls. buy your service instantly just like shopping online.</p>
        <h2></h2>
          <p></p>  
     </div>
    </transition>


    <transition name="coverTabsAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
      <div id="cover-services-tab" class="cover-tabs-section" v-if="isTab2Visible">
            <div class="mdl-grid">

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
       <div class="mdl-grid">


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















   <div class="cover-text-random-divider">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, inventore atque? Architecto dicta provident soluta explicabo facere sapiente similique ipsa facilis laudantium modi, necessitatibus minus, tempora temporibus nemo, quis distinctio!</p>
   </div>



   







   <div id="cover-cards">
     <h4>Some fancy title here</h4> 
     <div class="mdl-grid">



      <div class="mdl-cell mdl-cell--5-col  mdl-cell--4-col-tablet  mdl-cell--2-col-phone">
        <img src="https://cdn.dribbble.com/users/791530/screenshots/5660599/icons8_connection_lost_illustration.png">
      </div> 
      <div class="cover-cards-text mdl-cell mdl-cell--5-col  mdl-cell--4-col-tablet  mdl-cell--4-col-phone">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore nobis vel enim illo, cupiditate mollitia consectetur ullam voluptates quisquam debitis officia dolorum a accusantium adipisci, ipsa officiis, nisi unde.</p>
      </div>



      <div class="cover-cards-text mdl-cell mdl-cell--5-col  mdl-cell--4-col-tablet  mdl-cell--4-col-phone">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, doloremque! Vel porro possimus excepturi illum. Quod ab explicabo praesentium non quibusdam, modi quo recusandae, earum reiciendis magni eaque obcaecati quidem.</p>
      </div>
      <div class="mdl-cell mdl-cell--5-col  mdl-cell--4-col-tablet  mdl-cell--4-col-phone">
        <img src="https://cdn.dribbble.com/users/412478/screenshots/3673636/creative_dribble-08.png">
      </div> 
      


      <div class="mdl-cell mdl-cell--5-col  mdl-cell--4-col-tablet  mdl-cell--4-col-phone">
        <img src="https://cdn.dribbble.com/users/2323077/screenshots/4625711/01_jira-illos.png">
      </div> 
      <div class="cover-cards-text mdl-cell mdl-cell--5-col  mdl-cell--4-col-tablet  mdl-cell--4-col-phone">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit animi quasi quisquam debitis saepe asperiores sunt dicta, labore magnam totam dolorum, eum sit corrupti. Nemo perspiciatis sequi aperiam eveniet ad?</p>
      </div>





     </div>
   </div><!---cover cards ends here-->










   <div id="cover-demo" class="mdl-grid">
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




       features:[
         {img:'https://cdn.dribbble.com/users/1803663/screenshots/5268088/farmhouse1.png',name:'Transparency', content:'information on the page it is loosely separated.'},
         {img:'https://cdn.dribbble.com/users/1803663/screenshots/5301137/image.png',name:'facilidad',content:'El usuario podran orden servicios y ver el estado del mismo.'},
         {img:'https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png',name:'Portabilidad',content:'tendra la herramienta de su aplicacion en todos lados'},
         {img:'https://cdn.dribbble.com/users/1803663/screenshots/5188624/cape-mudge-lighthouse..png',name:'organizacion',content:'facil manipulacion de sus reportes.'},
         {img:'https://cdn.dribbble.com/users/1803663/screenshots/5371625/lighthouse_bovbjerg-lighthouse.png',name:'rentabilidad',content:'aumente sus ingresos.'},
         {img:'https://cdn.dribbble.com/users/1803663/screenshots/6080532/kerala_paddy_field.png',name:'',content:''},
         {img:'https://cdn.dribbble.com/users/1803663/screenshots/6149997/nature-3.png',name:'',content:''},
         {img:'https://cdn.dribbble.com/users/63407/screenshots/4828797/dribbble_tea_medows.png',name:'',content:''},
         {img:'https://cdn.dribbble.com/users/63407/screenshots/5877615/dribbble_india_stories_detail.png',name:'',content:''},
         {img:'https://cdn.dribbble.com/users/63407/screenshots/5095176/dribbble_lotus_pond.png',name:'',content:''},
       ],


        isTab1Visible: false,
        isTab2Visible: true,
        isTab3Visible: false,

         services:[
           {img:'https://cdn.dribbble.com/users/94074/screenshots/3647324/the_guardian__crop_.jpg',name:'Gardening'},
           {img:'https://cdn.dribbble.com/users/63407/screenshots/5462636/dribbble_taxi_cab_ride.png',name:'Rides'},
           {img:'https://cdn.dribbble.com/users/788099/screenshots/4329668/soldering_iron_electronics_kit8-net.png',name:'Technician'},
           {img:'https://cdn.dribbble.com/users/788099/screenshots/3547692/barbecue_kit8-net.png',name:'Cooking'},
           {img:'https://cdn.dribbble.com/users/1771554/screenshots/5205318/1_style_dribbble.jpg',name:'Developing'},
           {img:'https://cdn.dribbble.com/users/418188/screenshots/6005129/information_architecture_illustration_tubik.png',name:'Architecture'},
           {img:'https://cdn.dribbble.com/users/418188/screenshots/5381692/design_workspace_illustration_tubik.png',name:'Design'},
           {img:'https://cdn.dribbble.com/users/21928/screenshots/4051365/screen_shot_2017-12-28_at_3.27.52_pm.png',name:'Plumbing'},
           {img:'https://cdn.dribbble.com/users/103909/screenshots/3671664/sensors-01.jpg',name:'Entrepreneurship'},
           
         ],



    }
  },




  methods:{
    showTab1:function(){
      this.isTab1Visible = true
      this.isTab2Visible = false
      this.isTab3Visible = false
    },
    showTab2:function(){
      this.isTab1Visible = false
      this.isTab2Visible = true
      this.isTab3Visible = false
    },
    showTab3:function(){
      this.isTab1Visible = false
      this.isTab2Visible = false
      this.isTab3Visible = true
    },

  },




};
</script>

<style scoped>

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




#cover-tabs{
  width: 100%;
  min-height: 100vh;
  padding:42px 0;
}
#cover-tabs-nav{
  width:100%;
  margin:auto;
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




.cover-text-random-divider{
  width:100%;
  border: solid thin black;
  margin:auto;
  background:black;
  color:white;
  padding:22px;
  text-align: center;
  min-height: 20vh;
  display: flex;
  align-content: center;
  justify-content: center;
}
.cover-text-random-divider p{
  font-size:18px;
  align-self: middle;
  margin:auto;
  justify-self: center;
  width:80%;
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
   width: 500px;
   margin:32px;
   justify-content: center;
 }
 .feature-img{
   width:140px;
   height: 140px;
   overflow: hidden;
   border-radius: 100px;
   display: inline-block;
   margin:auto;
   align-self: middle;
 }
 .feature-img img{
   width:100%;
   height: 100%;
 }
 .feature-content{
   width: 320px;
   display: inline-block;
   margin:auto;
   align-self: middle;
   text-align: left
 }
 .feature-content h3{
   display: inline-block;
   margin:auto;
   align-self: middle;
 }
 .feature-text p{
   font-size:13px;
   display: inline-block;
   margin:auto;
   align-self: middle;
 }



#cover-cards{
  padding:100px 22px 200px 22px;
}
#cover-cards h4{
  padding:42px 22px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  margin:auto auto 52px auto;
  align-self: middle;
  width: 50%;
}
.cover-cards-text{
  display:flex;
  justify-content: center;
  align-content: middle;
}
#cover-cards p{
  justify-self: center;
  align-self: middle;
  margin: auto;
  display: inline-block;
  font-size:22px;
  line-height: 2.3rem;
  text-align: center;
  padding:22px;
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
