<template>
<div id="home">


 <h1>welcome to bright works</h1>
















</div>      
</template>








<script>
import {firebase, db} from '../firebaseConfig.js'

export default {
  name: "Home",
  data() {
    return {

      topCards:[
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},       
      ],

      activeServices:[],
      TaskListHome:[
        {'task':'here goes your task'},
        {'task':'here goes your to do'},
        {'task':'yes this is a list'},
        {'task':'this is a longer text inside a task just to see how it looks inside this div , if u know what i mean, this text is completely for testing only'},
      ],


      addingNewService:false,

      IsPanelVisible:true,
      IsReviewsVisible:true,
      IsServicesVisible:true,
      IsTaskVisible:true,
    
    
    }
  },







  created(){
        let self = this;

          db.collection('services').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data().schedule)
                
                const data ={
                  
                   'service_id': doc.data().service_id,
                   'owner_id': doc.data().owner_id,
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price': doc.data().price,
                   'schedule': doc.data().schedule,
                   'availability': doc.data().availability,
                   'url_name': doc.data().url_name,
                 }

                 if(doc.data().availability == true){
                   self.activeServices.push(data)
                 }

            })  
        })
    },


    methods:{
      addNewServiceFromHome:function(){
        this.addingNewService = true
        this.IsPanelVisible = true
      },
      addNewServiceFromHomeFinish:function(){
        this.addingNewService = false
      },



      hidethispanel: function(){
        this.IsPanelVisible = false
      },
      showthispanel: function(){
        this.IsPanelVisible = true
      },


      hideServices: function(){
        this.IsServicesVisible = false
      },
      showServices: function(){
        this.IsServicesVisible = true
      },

      hideTasks: function(){
        this.IsTaskVisible = false
      },
      showTasks: function(){
        this.IsTaskVisible = true
      },

      hideReviews: function(){
        this.IsReviewsVisible = false
      },
      showReviews: function(){
        this.IsReviewsVisible = true
      }




    }









} 
</script>

<style scoped>
#dashboard{
  width: 96%;
  margin: auto;
}
.home-dashboard-panels-headers{
  padding:22px;
  border-bottom: solid 0.5px rgba(0,0,0,0.3);
  width:97%;
  margin: auto auto 12px auto;
  display: flex;
  justify-content: space-between;
}
.home-dashboard-panels-headers h3{
  font-size:20px !important;
  text-align: left;
}
.home-dashboard-panels-headers h3,button{
  margin:auto;
  align-self: middle;
  display: inline-block;
}
#stadistics{
  width:100%;
  margin: 12px auto;
}
#activeServices,#HomeTasksList{
  width:800px;
  min-width:360px;
  margin: 12px auto;
}


</style>
