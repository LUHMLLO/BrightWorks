<template>
  <div>
      
          <div class="d-flex flex-between margin-bottom-25">
            <h4 class="font-bolder margin-y-0">Timeline</h4>
            <button class="font-bolder font-size-10 padding-10 bg-green-lighten-2-hover border-transparent color-grey-lighten-5-hover margin-y-0" @click="addToTimeline = true">Add to your timeline</button>
          </div>



          <div class="depth-3 w-100 margin-bottom-25" v-if="addToTimeline">

              <div class="w-100 padding-0">
                <textarea v-model.trim="content" name="add_timeline_text" class="margin-y-0 font-size-12 height-150 border-transparent color-grey-darken-2 bg-grey-lighten-3 padding-x-15 padding-y-10"></textarea>
              </div>

              <div class="w-100 padding-x-20 padding-top-20" v-if="attachmentPreview">
                  <div class="row">
                      <div class="col-4 padding-0 height-50 depth-1">
                          <div class="image-wrapper h-100">
                              <img :src="this.attachmentPreview">
                          </div>
                      </div>
                  </div>
              </div>

              <div class="w-100 padding-x-20 padding-y-15 d-flex flex-between">

                <button 
                    class="font-bolder font-size-10 padding-10 border-transparent margin-y-0"  
                    @click="createPost()" 
                    :disabled="this.content === '' && this.attachmentPreview === ''" 
                    :class="{
                        'bg-grey-lighten-2' : this.content === '' || this.attachmentPreview === '',  
                        'color-grey' : this.content === '' || this.attachmentPreview === '',
                        'bg-green-lighten-2' : this.content !== '' || this.attachmentPreview !== '',  
                        'color-grey-lighten-5' : this.content !== '' || this.attachmentPreview !== '',
                    }
                ">Publish
                </button>
                
                <div>
                    <input id="fileUpload" type="file" accept="image/x-png,image/gif,image/jpeg" hidden v-on:change="previewAttachments()"/>
                    <button class="font-bolder font-size-10 padding-10 border-transparent color-grey-darken-2 color-green-lighten-2-hover margin-y-0" @click="chooseFiles()">
                    <i class="uil uil-file"></i>Attachment</button>
                </div>

                <button class="font-bolder font-size-10 padding-10 border-transparent color-grey-darken-2 color-red-hover margin-y-0" @click="addToTimeline = false">Cancel</button>


              </div>
          </div>



          <div class="timeline-card depth-1 w-100 padding-25 margin-bottom-25" v-for="(post,index) in posts" :key="index">
            
                <div class="d-flex flex-start align-items-center align-content-center margin-bottom-15">
                    <router-link to="/profile" class="avatar avatar-lg roundify overflow-hidden margin-0 margin-right-10">
                        <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919">
                    </router-link>
                    <div class="margin-0">
                        <h6 class="font-bolder font-size-12 margin-0">{{post.userName}}</h6>
                        <p class="font-size-10 color-grey-darken-2  margin-0">{{post.userActivity}}</p>
                    </div>
                </div>

                <div v-if="post.content">
                    <p class="font-size-12">{{post.content | trimLength }}</p>
                </div>

                <div class="w-100" v-if="post.attachment">
                    <div class="image-wrapper height-250 margin-0 round-3 image-overlay image-blur-5">
                        <img :src="post.attachment">
                    </div>
                </div>

          </div> <!---timeline card--->






  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ref } from '../firebaseConfig'
export default {
    name: "timeline",
    data() {
        return {
            content: '',
            attachment: null,
            attachmentPreview: '',
            addToTimeline: true,
        }
    },
    computed: {
        ...mapState(['userProfile', 'posts'])
    },
    methods: {
            
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },

        previewAttachments(){
            const inputfile = document.getElementById('fileUpload')
            const file = inputfile.files[0]
            this.attachmentPreview = URL.createObjectURL(file)
            console.log(this.attachmentPreview)
        },

        
    
        createPost() {
            if(this.attachmentPreview) {
                const inputfile = document.getElementById('fileUpload');
                const file = inputfile.files[0];
                let selectedFile = ref.child('postsAttachments/'+file.name)

                selectedFile.put(file).then(response =>{
                    response.ref.getDownloadURL().then((downloadURL) => {
                        this.attachment = downloadURL
                        console.log(this.attachment)
                    }).then(()=> {
                        this.$store.dispatch('createPost', { content: this.content, attachment: this.attachment })
                        this.content = ''
                        this.attachment = '',
                        this.attachmentPreview = ''
                        this.addToTimeline = false
                        console.log("posted")
                    })
                }).catch(err => 
                    console.log(err)
                );
            }
            else{
                this.$store.dispatch('createPost', { content: this.content, attachment: this.attachment })
                this.content = ''
                this.attachment = '',
                this.attachmentPreview = ''
                this.addToTimeline = false
                console.log("posted")
            }
        },

    },
    filters: {
        /*
        formatDate(val) {
            if (!val) { return '-' }
            
            let date = val.toDate()
            return moment(date).fromNow()
        },
        */
        trimLength(val) {
            if (val.length < 200) { return val }
            return `${val.substring(0, 200)}...`
        }
    }
}
</script>
