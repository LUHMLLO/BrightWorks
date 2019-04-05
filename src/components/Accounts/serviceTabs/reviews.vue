<template>
<div>





  <div class="global-post-container" v-for="(reviews,reviewsData) in reviews" :key="reviewsData">
     
     <div class="global-post-header">
         
         <div class="global-post-img mdl-shadow--2dp">
             <img v-bind:src="reviews.publisher_img">
         </div><!---img--->


         <div class="global-post-owner">
             <h3>{{reviews.publisher_name}}</h3>
         </div><!--owner or publisher-->


     </div><!---header-->


     <div class="global-post-content">

         <p v-html="reviews.content"></p>

     </div><!--content-->

     <div class="global-post-status">

         <div class="global-posts-calification">
             <i class='uil uil-star'></i>
             <i class='uil uil-star'></i>
             <i class='uil uil-star'></i>
             <i class='uil uil-star'></i>
             <i class='uil uil-star'></i>
         </div>

         <div class="global-post-data">
             <p>adquired plan</p>
         </div>
         
     </div><!---status-->


  </div><!---post--->



</div>
</template>



<script>
import {db} from '../../../firebaseConfig.js'
export default {
    name:'reviews',
    props:['serviceid'],
    data(){
        return{

            reviews:[],

        }
    },



    created(){        
         this.getProps()
    },

    methods:{
        getProps(){
        let self = this;      
          db.collection('reviews').where('reviewed_service' , '==' , this.$props.serviceid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())

                const data={
                    'publisher_name' : doc.data().publisher_name,
                    'publisher_id' : doc.data().publisher_id,
                    'publisher_img': doc.data().publisher_img,
                    'content': doc.data().content,

                }
                   self.reviews.push(data)

            })
          })
        },
    },
    


}




</script>

