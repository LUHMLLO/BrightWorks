<template>
<div>
    

  <div class="global-post-container" v-for="(post,postsData) in posts" :key="postsData">
     
     <div class="global-post-header">
         
         <div class="global-post-img mdl-shadow--2dp">
             <img v-bind:src="publisher_img">
         </div><!---img--->


         <div class="global-post-owner">
             <h3>{{publisher_name}}</h3>
         </div><!--owner or publisher-->


     </div><!---header-->


     <div class="global-post-content">

         <p>{{post.content}}</p>

     </div><!--content-->

     <div class="global-post-status">

     </div><!---status-->


     <div class="global-post-comment">
         <input type="text" placeholder="make a comment">
     </div><!---comment-->


  </div><!---post--->


</div>
</template>




<script>
import { db } from '../../../firebaseConfig.js'

export default {
    name: 'timeline',
    props:['serviceid'],
    
    data(){
        return{
            posts:[
                {'content':'this is a posts template'},
                {'content':'it can hold lots of texts and keep its minimal interface'},
                ],

            publisher_img:null,
            publisher_name:null,
            publisher_id:null,
        }
    },



    created(){        
          db.collection('posts').where('service_id' , '==' , this.serviceid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())

                const data={
                    'publisher_name' : doc.data().publisher_name,
                    'publisher_id' : doc.data().publisher_id

                }

                if(doc.data().availability == true){
                   self.activeServices.push(data)
                 }

            })
          })
    },
    


}
</script>



