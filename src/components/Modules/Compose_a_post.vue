<template>
<div>


        <div class="global-header mdl-shadow--2dp">
          <h3 class="global-header-title-simple" style="">Compose a post</h3>
        </div><!--header-->




        <div class="global-content">

            <button v-on:click="publish">publish</button>
             
             <div id="editor" style="width:80%; height:auto; margin:auto; padding:0px;">
                 <quill-editor v-model="content"/>
             </div>

         <br><br><br><br><br>
        </div><!---content-->






</div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'


import Swal from 'sweetalert'

import {firebase, db} from '../../firebaseConfig.js'


export default {
    name: 'Compose_a_post',
    components: {
        quillEditor
    },
    data(){
        return{
            content:'',
            publisher_name:null,
            publisher_id:null,
            publisher_img:null,
            service_id:null,
        }
    },




    created(){
        let self = this;
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {                       
            //console.log(snapshot.data())

                    self.publisher_name = snapshot.data().name
                    self.publisher_id = firebase.auth().currentUser.uid
                    self.publisher_img = snapshot.data().img
                           
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
                service_id: self.service_id,
                })

                Swal({ title: "Congrats ! ", text: "Your service has been created", icon: "success", button: "yaas!",}).then(() => {self.$router.replace("manage_services")})
            })
            .catch(error => Swal(error))
        },

    },
}
</script>

<style scoped>
#editor{
    max-height: 100% !important;
    min-height: 400px !important;
    height:auto !important;
}
.quill-editor{
    width:100% !important;
    min-width: 100%;
    min-height: 100% !important;
    height: 100%;
    max-height: 100% !important;
    margin: auto !important;
    border:none !important;
    outline:none !important;
}

</style>
