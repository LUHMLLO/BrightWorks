<template>
  <div>
      
          <div class="d-flex flex-between margin-bottom-25">
            <h4 class="font-bolder margin-y-0">Timeline</h4>
            <button class="font-bolder font-size-10 padding-10 bg-green-lighten-2-hover border-transparent color-grey-lighten-5-hover margin-y-0" @click="addToTimeline = true">Add to your timeline</button>
          </div>



          <div class="depth-3 w-100 margin-bottom-25" v-if="addToTimeline">
              <div class="w-100 padding-x-20 padding-top-15 margin-bottom-15">
                <textarea v-model.trim="content" name="add_timeline_text" class="margin-y-0 font-size-12 height-100 border-transparent color-grey-darken-2 bg-grey-lighten-3 padding-x-15 padding-y-10"></textarea>
              </div>
              <div class="w-100 padding-x-20 padding-bottom-15 d-flex flex-end">

                <button 
                    class="font-bolder font-size-10 padding-10 border-transparent margin-y-0"  
                    @click="createPost()" 
                    :disabled="this.content === ''" 
                    :class="{
                        'bg-grey-lighten-2' : this.content == '',  
                        'color-grey' : this.content == '',
                        'bg-green-lighten-2' : this.content !== '',  
                        'color-grey-lighten-5' : this.content !== '',
                    }
                ">Publish
                </button>

              </div>
          </div>



          <div class="timeline-card depth-1 w-100 padding-25 margin-bottom-25" v-for="(post,index) in posts" :key="index">
            
                <div class="d-flex flex-start align-items-center align-content-center margin-bottom-15">
                    <router-link to="/profile" class="avatar avatar-lg roundify overflow-hidden margin-0 margin-right-10">
                        <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919" alt="">
                    </router-link>
                    <div class="margin-0">
                        <h6 class="font-bolder font-size-12 margin-0">{{post.userName}}</h6>
                        <p class="font-size-10 color-grey-darken-2  margin-0">{{post.userActivity}}</p>
                    </div>
                </div>

                <div class="">
                    <p class="font-size-12">{{post.content | trimLength }}</p>
                </div>

                <div class="row row-adjust overflow-hidden" v-if="post.images">
                    <div class="col-2">
                        <div class="image-wrapper height-100 margin-0 round-3 image-overlay image-blur-5">
                        <img src="https://images.unsplash.com/photo-1597232465681-1a311e8f16fe" alt="">
                        </div>
                    </div>
                </div>

          </div> <!---timeline card--->






  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "timeline",
    data() {
        return {
            content: '',
            addToTimeline: false,
        }
    },
    computed: {
        ...mapState(['userProfile', 'posts'])
    },
    methods: {
        createPost() {
            console.log("posted")
            this.$store.dispatch('createPost', { content: this.content })
            this.content = ''
            this.addToTimeline = false
        }
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