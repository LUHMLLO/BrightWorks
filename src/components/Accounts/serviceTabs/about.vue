<template>
<div>

 <div class="global-about-card">
     <div class="global-about-card-header">
         
         <div class="global-about-card-title">
             <h3>{{name}}</h3>
         </div><!---title-->

         <div class="global-about-card-schedule">
             <h3>{{time_start}} - {{time_end}}</h3>
         </div><!--schedule--->

     </div><!---header-->


     <div class="global-about-card-content">


        <div class="global-about-card-description">
            <p>{{description}}</p>
        </div><!---description-->


        <div class="global-about-card-price">
            <p>timezone here</p>
        </div><!---price-->



     </div><!--content--->    
 </div><!---about card -->




  <div class="global-grid">
        <div class="global-info-pill" v-for="(detail,DetailsData) in Details" :key="DetailsData">
            <i class='uil uil-phone'></i>
            <span>{{detail.detail}}</span>
        </div>
  </div><!---global grid--->


   <div v-if="yesThisIsMyVideo">
     <iframe class="global-iframe mdl-shadow--2dp" v-bind:src="video"></iframe>
   </div>




</div>
</template>



<script>
import { db } from '../../../firebaseConfig.js'

export default {
    name:'about',
    props:['serviceid'],
    data(){
        return{
            img:null,
            name:null,
            description:null,
            time_start:null,
            time_end:null,
            video:null,
            yesThisIsMyVideo:false,

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
                    this.img = doc.data().img
                    this.name = doc.data().name
                    this.description = doc.data().description
                    this.time_start = doc.data().time_start
                    this.time_end = doc.data().time_end

                    if(doc.data().video == null || doc.data().video == ''){
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

