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
















    <div id="cover-tabs" class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">


      <div class="mdl-tabs__tab-bar">
        <a href="#How-it-works" class="mdl-tabs__tab">How it Works</a>
        <a href="#Services" class="mdl-tabs__tab is-active">Services</a>
        <a href="#Features" class="mdl-tabs__tab">Features</a>
      </div>

    <div id="cover-tabs-content">


      <div class="mdl-tabs__panel" id="How-it-works">
         <div class="mdl-grid">


           <div class="how-it-works-item">

           </div>
           

         </div>
      </div><!--tab ends here-->




      <div class="mdl-tabs__panel is-active" id="Services">
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
     
     
     
     
      <div class="mdl-tabs__panel" id="Features">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur porro ducimus repellat laudantium esse ipsam reiciendis quae alias, distinctio perferendis consectetur inventore quisquam recusandae quaerat consequuntur, ex impedit sint!</p>
      </div><!--tab ends here-->


    </div><!---cover tabs content-->
    </div><!-- cover tabs ends here -->















   <div class="">

   </div>

















  </div>
</template>

<script>
export default {
  name: "Cover",
  data() {
    return {

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
           
         ]

    }
  }
};
</script>

<style scoped>

#cover-header {
  background: url("https://images.unsplash.com/photo-1551864605-74764bd3d836?ixlib=rb-1.2.1&auto");
  background-size: cover;
  padding: 100px 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-shadow: inset 0 0 100px 900px rgba(0, 0, 0, 0.5);
  align-content: middle;
  display: flex;
  justify-content: center;
}
#cover-header-content {
  margin: 200px auto 230px auto;
  align-self: middle;
  color: white;
}
#cover-header-content button {
  color: white;
  border-radius: 100px;
  margin: 10px 10px;
}

.mdl-tabs__tab-bar{
  border-bottom:none !important;
  border: none !important;
  width: 100%;
  margin: 52px auto auto auto;
}
#cover-tabs-content{
  padding:52px;
  display: flex;
  justify-content: center;
}


#How-it-works-img{
  border-radius: 8px;
  overflow: hidden;
}

#How-it-works-img img{
  width: 100%;
  height: 100%;
}
#How-it-works-description{
  display:flex;
  justify-content: center;
  align-content: middle;
}
#How-it-works-description p{
  justify-self: center;
  align-self: middle;
  margin: auto;
  display: inline-block;
  font-size:22px;
  line-height: 2.3rem;
  text-align: justify;
  padding:22px;
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
  margin:auto;
}
</style>
