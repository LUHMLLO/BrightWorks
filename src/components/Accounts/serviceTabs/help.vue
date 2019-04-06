<template>
<div>


  <div class="global-questions-make mdl-shadow--2dp">
      <div class="global-questions-make-input">
          <input type="text" name="" id="" placeholder="Title">
          <input type="text" name="" id="" placeholder="Content...">
      </div><!---make questions input--->

      <i class='uil uil-message'></i>
  </div><!--- make questions -->

  <br><br><br><br><br><br><br>





  <div class="global-post-container" v-for="(question,questionsData) in questions" :key="questionsData">
     
     <div class="global-post-header">
         
         <div class="global-post-img mdl-shadow--2dp">
             <img v-bind:src="question.publisher_img">
         </div><!---img--->


         <div class="global-post-owner">
             <h3>{{question.publisher_name}}</h3>
         </div><!--owner or publisher-->


     </div><!---header-->


     <div class="global-post-content-question">
         <h3>{{question.title}}</h3>
         <p>{{question.content}}</p>

     </div><!--content-->
  </div><!---post--->



</div>
</template>



<script>
import {db} from '../../../firebaseConfig.js'
export default {
    name:'help',
    props:['serviceid'],
    data(){
        return{


           questions:[],


        }
    },



    created(){        
         this.getProps()
    },

    methods:{
        getProps(){
        let self = this;      
          db.collection('questions').where('questioned_service' , '==' , this.$props.serviceid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())

                const data={
                    'publisher_name' : doc.data().publisher_name,
                    'publisher_id' : doc.data().publisher_id,
                    'publisher_img': doc.data().publisher_img,
                    'content': doc.data().content,
                    'title': doc.data().title,

                }
                   self.questions.push(data)

            })
          })
        },
    },


}
</script>

