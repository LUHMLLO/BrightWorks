<template>
    <div>
        



  <div class="global-dashboard-section mdl-shadow--2dp">

    <div class="global-dashboard-section-title">
      <h3>Tasks</h3>
    </div>

<div class="global-horizontal-scroll">

   <div class="global-horizontal-position"  v-for="(task, taskIndex) in tasks" :key="taskIndex">


     <div class="global-detailed-task mdl-shadow--2dp">
       
       <div class="global-detailed-task-header">
          
          <div class="global-detailed-task-header-title">
            <h3>{{task.title}}</h3>
          </div>

          <div class="global-detailed-task-header-options">
            <i class='uil uil-pen'></i>
            <i class='uil uil-trash'></i>
          </div>

       </div><!---header--->

       <div class="global-detailed-task-content">
         <p>{{task.content}}</p>
       </div><!---task content--->

       <div class="global-detailed-task-footer">
         <div class="global-detailed-task-footer-priority">
           <i class='uil uil-exclamation-circle'></i>
           <span>{{task.priority}}</span>
         </div>
         
         <div class="global-detailed-task-footer-date">
           <i class='uil uil-clock'></i>
           <span>{{task.date}}</span>
         </div>
       </div><!----task foooterr---->


     </div><!---detailed task--->

</div><!---horizontal position--->

</div>


  </div><!---global dashboard section--->






<div class="global-tab-content">

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

     <div class="global-post-status" v-if="disablethis">

     </div><!---status-->


     <div class="global-post-comment" v-if="disablethis">
         <input type="text" placeholder="make a comment">
     </div><!---comment-->


  </div><!---post--->

</div>










    </div>
</template>

<script>

import {firebase,db} from '../../firebaseConfig.js'

export default {
    name: 'dashboard_C',    
    data(){
        return{
            posts:[],
            tasks:[
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
            ],

            publisher_img:null,
            publisher_name:null,
            publisher_id:null,

            disablethis:false,
        }
    },



    created(){        
         this.getProps()
    },

    methods:{
        getProps(){
        let self = this;      
          db.collection('posts').get().then((querySnapshot) => {
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
    },
    


}
</script>

