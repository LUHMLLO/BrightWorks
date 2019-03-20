<template>
  <div id="search">





        <div id="search-header" class="global-header mdl-shadow--2dp">

          <h3 class="global-header-title">Search</h3>

          
          <div id="search-input" class="global-search">
            <i class='uil uil-search'></i>
            <input type="text" placeholder="type something" v-model="search">
            <i class='uil uil-filter'></i>
          </div>


        </div><!--search header-->






        <div id="search-content" class="global-content">

           <div class="global-grid mdl-grid">
             
               <div class="userORservice" v-for="(user,usersData) in users" :key="usersData">

                 <div class="userORserviceIMG mdl-shadow--2dp">
                   <img v-bind:src="user.img || 'https://cdn.dribbble.com/users/1047810/screenshots/4739092/2.png'"/>
                 </div>

                 <h4>{{user.name}}</h4>
               </div>

           </div><!--serach content-->

        </div>






  </div>
</template>

<script>
import {firebase,db} from '../../firebaseConfig.js'
export default {
  name: 'Search',
  data(){
    return{

      
      users:[],
      services:[],
      search: null,


    }
  },

  created(){
         let self = this;  

          db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data().name) 
                 const data ={
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'email': doc.data().email,
                   'phone': doc.data().phone,
                 }
                   self.users.push(data)
            })
          });



  },

  computed:{

    filteredUsersServices: function(){
      return this.users.filter((user) => {
        return user.name.match(this.search)
      })
    },

  },




}
</script>



<style scoped>
  .global-header{
    width:100%;
    margin:auto;
    min-height: 300px;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .global-header-title{
    margin:auto;
    align-self: middle;
    display: inline-block;
  }

  .global-search{
    display: flex;
    margin:auto;
    align-self: middle;
    justify-content: center;
    border-bottom:solid 1px rgba(0,0,0,0.6);
  }
  .global-search i{
    border: none;
    margin:auto;
    align-self: middle;
    display: inline-block;
    outline:none;
  }
  .global-search input{
    border: none;
    margin:auto;
    align-self: middle;
    display: inline-block;
    padding:12px;
    outline:none;
  }


  .global-content{
    padding:22px;
  }

  .global-grid{
    align-content: center;
    justify-content: center;
    width:100%;
  }


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