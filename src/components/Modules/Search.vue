<template>
  <div id="search">





        <div id="search-header" class="global-header mdl-shadow--2dp">

          <h3 class="global-header-title-only">Search</h3>

          
          <div id="search-input" class="global-search">
            <i class='uil uil-search'></i>
            <input type="text" placeholder="type something" v-model="search">
            <i class='uil uil-filter'></i>
          </div>


        </div><!--search header-->






        <div id="search-content" class="global-content">

           <div class="global-grid">
             
             
             
              <div class="global-search-result" v-for="(service,servicesData) in services" v-bind:key="servicesData">
                <router-link :to="{ name: 'Service', params: {service_id: service.service_id || 404}}">
                        <div class="global-search-result-img mdl-shadow--2dp">
                          <img v-bind:src="service.img || 'https://cdn.dribbble.com/users/1047810/screenshots/4739092/2.png'"/>
                        </div>
                    <div class="global-search-result-text mdl-shadow--2dp">
                      <h3>{{service.name}}</h3>
                      <p>{{service.description}}</p>
                    </div><!---content--->
                </router-link>
              </div><!---global-search-result--->

             

           </div><!--serach content-->

        </div>






  </div>
</template>

<script>
import {db} from '../../firebaseConfig.js'
export default {
  name: 'Search',
  data(){
    return{

      
      users:[],
      services:[],
      search: null,
      RouteName:null,
      user_id:null,
      url_name:null,


    }
  },

  created(){
         let self = this;  

          db.collection('services').orderBy('name').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data().url_name) 
                 const data ={
                   'user_id': doc.data().user_id,
                   'service_id': doc.data().service_id,
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                 }

                 if(doc.data().availability == true){
                   self.services.push(data)
                 }

            })
          });
  },






}
</script>



<style scoped>

  .userORservice{
    width:300px;
    margin: 22px;
    align-self: middle;
    justify-self: center;
  }
  .userORserviceIMG{
    border-radius:100px; 
    overflow:hidden; 
    width:200px; 
    height:200px;
    margin:auto;
  }
  .userORserviceIMG img{
    width: 100%;
    height: 100%;
  }
  .userORservice h4{
    margin:auto;
    padding:22px 0;
  }
</style>