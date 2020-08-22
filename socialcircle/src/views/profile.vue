<template>
  <facebook_layout :id="this.$options.name">
    <div class="row">


      <div class="col-2 md:col-12">
        <div class="image-wrapper height-350 round-3 margin-bottom-15">
          <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919" alt="">
        </div>
        <h4 class="font-bolder">Carl F. Johnson</h4>
        <div class="d-flex margin-0 padding-0">
          <p class="font-size-14 color-grey-darken-2 d-inline-block margin-right-20 margin-0">80 articles</p>
          <p class="font-size-14 color-grey-darken-2 d-inline-block  margin-0">720 followers</p>
        </div>
        <p class="font-size-12 color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="padding-x-0 padding-y-10">
                <div class="border-bottom-solid border-bottom-grey-lighten-2 padding-5 w-100"></div>
            </div>
        <h6 class="font-size-14 font-bolder color-grey-darken-2">Activity</h6>
        <p class="font-size-12 color-grey-darken-2">Professional Photographer</p>
        <h6 class="font-size-14 font-bolder color-grey-darken-2">Location</h6>
        <p class="font-size-12 color-grey-darken-2">Santiago, Dominican Republic</p>
        <h6 class="font-size-14 font-bolder color-grey-darken-2">Works at</h6>
        <p class="font-size-12 color-grey-darken-2">CFJ PhotoStudio</p>
        <h6 class="font-size-14 font-bolder color-grey-darken-2">Contact</h6>
        <p class="font-size-12 color-grey-darken-2">contact@cfjphotostudio.com</p>
      </div>


      <div class="col-10 md:col-12 padding-left-50 md:padding-left-15">
        <h4 class="font-bolder">Stories</h4>
        <div class="d-flex w-100 overflow-hidden margin-bottom-50">
          <div class="col-2 padding-0 margin-right-15">
            <div class="image-wrapper height-150 margin-0 round-3 image-overlay image-blur-5">
              <img src="https://images.unsplash.com/photo-1597232465681-1a311e8f16fe" alt="">
            </div>
          </div>
          <div class="col-2 padding-0 margin-right-15">
            <div class="image-wrapper height-150 margin-0 round-3 image-overlay image-blur-5">
              <img src="https://images.unsplash.com/photo-1597988685565-fcb4e4307b7d" alt="">
            </div>
          </div>
          <div class="col-2 padding-0 margin-right-15">
            <div class="image-wrapper height-150 margin-0 round-3 image-overlay image-blur-5">
              <img src="https://images.unsplash.com/photo-1597232465681-1a311e8f16fe" alt="">
            </div>
          </div>
          <div class="col-2 padding-0 margin-right-15">
            <div class="image-wrapper height-150 margin-0 round-3 image-overlay image-blur-5">
              <img src="https://images.unsplash.com/photo-1597232465681-1a311e8f16fe" alt="">
            </div>
          </div>
          <div class="col-2 padding-0 margin-right-15">
            <div class="image-wrapper height-150 margin-0 round-3 image-overlay image-blur-5">
              <img src="https://images.unsplash.com/photo-1597232465681-1a311e8f16fe" alt="">
            </div>
          </div>
          <div class="col-2 padding-0 margin-right-15">
            <div class="image-wrapper height-150 margin-0 round-3 image-overlay image-blur-5">
              <img src="https://images.unsplash.com/photo-1597232465681-1a311e8f16fe" alt="">
            </div>
          </div>
        </div>


        
        <h4 class="font-bolder">Timeline</h4>

        <div class="depth-1 w-100 padding-25">
          
          <div class="d-flex flex-start align-items-center align-content-center margin-bottom-15">
            <router-link to="/profile" class="avatar avatar-lg roundify overflow-hidden margin-0 margin-right-10">
              <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919" alt="">
            </router-link>
            <div class="margin-0">
              <h6 class="font-bolder font-size-12 margin-0">Carl F. Johnson</h6>
              <p class="font-size-10 color-grey-darken-2  margin-0">Professional Photographer</p>
            </div>
          </div>

          <div class="">
            <p class="font-size-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur cum itaque unde nesciunt et aperiam corporis quibusdam, obcaecati alias odio numquam vitae architecto illum soluta, doloremque sunt officia excepturi.</p>
          </div>

          <div class="row row-adjust overflow-hidden">
            <div class="col-2">
              <div class="image-wrapper height-100 margin-0 round-3 image-overlay image-blur-5">
                <img src="https://images.unsplash.com/photo-1597232465681-1a311e8f16fe" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>




    </div>
  </facebook_layout>
</template>

<script>
export default {
  name: 'Home',
  components: {
    facebook_layout:() => import('../layouts/facebook'),
  }
}
</script>
