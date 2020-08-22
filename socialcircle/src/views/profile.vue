<template>
  <facebook_layout :id="this.$options.name">
    <div class="row">


      <div class="col-3 md:col-12">
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
      </div><!--profile description-->


      <div class="col-9 md:col-12 padding-left-50 md:padding-left-15">

        <section class="section">
          <stories/>
        </section>


        <section class="section">
          <timeline/>
        </section>


      </div>




    </div>
  </facebook_layout>
</template>

<script>
export default {
  name: 'Home',
  components: {
    facebook_layout:() => import('../layouts/facebook'),
    stories:() => import('../components/stories'),
    timeline:() => import('../components/timeline'),
  }
}
</script>
