<template>
<div>

 <div class="global-about-card">
     <div class="global-about-card-header">
         
         <div class="global-about-card-title">
             <h3>{{name}}</h3>
         </div><!---title-->

         <div class="global-about-card-schedule">
             <h3>{{schedule}}</h3>
         </div><!--schedule--->

     </div><!---header-->


     <div class="global-about-card-content">


        <div class="global-about-card-description">
            <p>{{description}}</p>
        </div><!---description-->


        <div class="global-about-card-price">
            <p>{{price}}</p>
        </div><!---price-->



     </div><!--content--->    
 </div><!---about card -->




  <div class="global-grid">
        <div class="global-info-pill" v-for="(detail,DetailsData) in Details" :key="DetailsData">
            <i class='uil uil-phone'></i>
            <span>{{detail.detail}}</span>
        </div>
  </div><!---global grid--->



   <iframe class="global-iframe mdl-shadow--2dp" v-bind:src="video" v-if="yesThisIsMyVideo">

   </iframe>





</div>
</template>



<script>
import { db } from '../../../firebaseConfig.js'

export default {
    name:'about',
    props:['serviceid'],
    data(){
        return{
            user_id:null,
            url_name:null,
            img:null,
            name:null,
            schedule:null,
            description:null,
            price:null,
            video:null,
            yesThisIsMyVideo:null,

            Details:[
                {'detail':'user detail in here'},
                {'detail':'user detail in here'},
                {'detail':'user detail in here'},
                {'detail':'user detail in here'},
            ],
        }
    },








  created(){
          db.collection('services').where('service_id', '==' , this.$props.serviceid).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
                    this.user_id = doc.data().user_id
                    this.url_name = doc.data().url_name
                    this.img = doc.data().img
                    this.name = doc.data().name
                    this.schedule = doc.data().schedule
                    this.description = doc.data().description
                    this.price = doc.data().price

                    if(doc.data().video == ''){
                        this.yesThisIsMyVideo = false
                    }
                    else{
                        this.yesThisIsMyVideo = true
                        this.video = doc.data().video
                    }
                    
          })
        })
  }










}
</script>

