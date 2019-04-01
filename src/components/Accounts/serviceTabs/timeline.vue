<template>
<div>
    

  <div class="global-post-container" v-for="(post,postsData) in posts" :key="postsData">
     
     <div class="global-post-header">
         
         <div class="global-post-img mdl-shadow--2dp">
             <img v-bind:src="post.publisher_img">
         </div><!---img--->


         <div class="global-post-owner">
             <h3>{{post.publisher_name}}</h3>
         </div><!--owner or publisher-->


     </div><!---header-->


     <div class="global-post-content">

         <p v-html="post.content"></p>

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
            posts:[],

            publisher_img:null,
            publisher_name:null,
            publisher_id:null,
        }
    },



    created(){        
         this.getProps()
    },

    methods:{
        getProps(){
        let self = this;      
          db.collection('posts').where('service_id' , '==' , this.$props.serviceid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())

                const data={
                    'publisher_name' : doc.data().publisher_name,
                    'publisher_id' : doc.data().publisher_id,
                    'publisher_img': doc.data().publisher_img,
                    'content': doc.data().content,

                }
                   self.posts.push(data)

            })
          })
        },
    }
    


}
</script>



