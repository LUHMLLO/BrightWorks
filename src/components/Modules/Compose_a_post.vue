<template>
<div>


        <div class="global-header mdl-shadow--2dp">
          <h3 class="global-header-title-simple" style="">Compose a post</h3>
        </div><!--header-->




        <div class="global-content">

            <div class="global-attachable-header">
                
                <select name="serviceIDs" id="" class="global-attachable-select" v-model="Selected_service_id" required>
                    <option v-bind:value="myservice.service_id"  v-for="(myservice,myservicesData) in myservices" :key="myservicesData">{{myservice.service_name}}</option>
                </select>



                <button v-on:click="publish" class="global-button">publish</button>
            </div><!---attachable header-->

            
             
             <div style="width:80%; height:auto; margin:auto; padding:0px;">
                 <Editor id="editor" v-model="content"/>
             </div>

         <br><br><br><br><br>
        </div><!---content-->






</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

import {firebase, db} from '../../firebaseConfig.js'
import Swal from 'sweetalert'

export default {
    name: 'Compose_a_post',
    components: {
        Editor,
    },
    data(){
        return{
            content:'',
            publisher_name:null,
            publisher_id:firebase.auth().currentUser.uid,
            publisher_img:null,
            service_id:null,
            myservices:[],
            Selected_service_id:null,
        }
    },




    created(){
        let self = this;


          db.collection('services').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data().schedule)
                
                const data ={
                  
                   'service_id': doc.data().service_id,
                   'service_name':doc.data().name,
                 }
                   self.myservices.push(data)


            })  
        })      
               

    },


    updated(){
        let self = this;
        //console.log(this.Selected_service_id)
          db.collection('services').where('service_id','==',self.Selected_service_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(self.service_name)

                  
                   self.publisher_name = doc.data().name
                   self.publisher_img = doc.data().img


            })  
        })          
    },



    methods:{
        publish: function(){
            let self = this;
            db.collection('posts').add({
            })
            .then(function(docRef) {
                
                db.collection('posts').doc(docRef.id).set({
                post_id: docRef.id,
                publisher_id: self.publisher_id,
                publisher_img: self.publisher_img,
                publisher_name: self.publisher_name,
                content: self.content,
                service_id: self.Selected_service_id,
                })

                Swal({ title: "Congrats ! ", text: "Your posts has been published", icon: "success", button: "nice!",}).then(() => {self.$router.replace("Compose")})
            })
            .catch(error => Swal(error))
        },

    },
}
</script>

<style scoped>
#editor,.quill-editor,.ql-editor,.ql-blank,.ql-editor.ql-blank,.ql-container,.ql-snow,.ql-container.ql-snow{
    width:100% !important;
    min-width: 100%;
    max-height: 100% !important;
    min-height: 400px !important;
    height:auto !important;
    margin: auto !important;
    border:none !important;
    outline:none !important;
}

.tox-notifications-container,.tox-notification,.tox-notification--in,.tox-notification--warning,.tox-statusbar{
    display: none !important;
}


</style>
