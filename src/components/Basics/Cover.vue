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
    </div>
    <!--cover header ends herer--->
















  <div id="cover-tabs">

      <div id="cover-tabs-nav">
        <button class="mdl-button" v-on:click="showTab1">How it Works</button>
        <button class="mdl-button" v-on:click="showTab2">Services</button>
        <button class="mdl-button" v-on:click="showTab3">Features</button>
      </div>
      <br>
      <br>
    
    <transition name="coverTabsAnim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
     <div id="cover-howitworks-tab" class="cover-tabs-section" v-if="isTab1Visible">
       <h3>how it works</h3>
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
       <h3>features</h3>
     </div>
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


        isTab1Visible: false,
        isTab2Visible: true,
        isTab3Visible: false,

         services:[
           {img:'https://cdn.dribbble.com/users/94074/screenshots/3647324/the_guardian__crop_.jpg',name:'Gardening'},
           {img:'https://cdn.dribbble.com/users/63407/screenshots/5462636/dribbble_taxi_cab_ride.png',name:'Rides'},
           {img:'https://cdn.dribbble.com/users/788099/screenshots/4329668/soldering_iron_electronics_kit8-net.png',name:'Electricity'},
           {img:'https://cdn.dribbble.com/users/788099/screenshots/3547692/barbecue_kit8-net.png',name:'Cooking'},
           {img:'https://cdn.dribbble.com/users/1771554/screenshots/5205318/1_style_dribbble.jpg',name:'Developing'},
           {img:'https://cdn.dribbble.com/users/418188/screenshots/6005129/information_architecture_illustration_tubik.png',name:'Architect'},
           {img:'https://cdn.dribbble.com/users/418188/screenshots/5381692/design_workspace_illustration_tubik.png',name:'Designing'},
           {img:'https://cdn.dribbble.com/users/21928/screenshots/4051365/screen_shot_2017-12-28_at_3.27.52_pm.png',name:'Plumbing'},
           {img:'https://cdn.dribbble.com/users/103909/screenshots/3671664/sensors-01.jpg',name:'Managing'},
           
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
  background: url("https://images.unsplash.com/photo-1551864605-74764bd3d836?ixlib=rb-1.2.1&auto");
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
}

.tab-active{
  background: rgba(90, 90, 90, 0.1);
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
