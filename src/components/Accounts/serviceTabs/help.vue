<template>
<div>

    <br>
   <h4>Ask something</h4>
  <div class="global-questions-make mdl-shadow--2dp">
      
      <div class="global-questions-make-input">
          <input type="text" name="" id="" placeholder="Title" v-model="title">
          <input type="text" name="" id="" placeholder="Content..." v-model="content">
      </div><!---make questions input--->

      <i class='uil uil-message' v-on:click="PostAQuestion" style="cursor:pointer;"></i>
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
import {firebase,db} from '../../../firebaseConfig.js'
import Swal from 'sweetalert'
export default {
    name:'help',
    props:['serviceid'],
    data(){
        return{


           questions:[],

           title:null,
           content:null,

           publisher_name:null,
           publisher_id:firebase.auth().currentUser.uid,
           publisher_img:null,
           service_id:null,


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


          
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {                       

                        self.publisher_img = snapshot.data().img
                        self.publisher_name = snapshot.data().name                         
        })



        },

   


        PostAQuestion: function(){
            let self = this;
            db.collection('questions').add({
            })
            .then(function(docRef) {
                
                db.collection('questions').doc(docRef.id).set({
                question_id: docRef.id,
                publisher_id: self.publisher_id,
                publisher_img: self.publisher_img,
                publisher_name: self.publisher_name,
                title: self.title,
                content: self.content,
                questioned_service: self.$props.serviceid,
                })

                Swal({ title: "Congrats ! ", text: "Your questions has been posted", icon: "success", button: "nice!",})
            })
            .catch(error => Swal(error))
        },
     },





    }



</script>

