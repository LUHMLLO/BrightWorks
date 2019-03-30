<template>
<div>


  <div class="global-horizontal-scroll">
    <div class="global-card-small mdl-shadow--2dp global-horizontal-position" v-for="(topCard,topCardsData) in topCards" :key="topCardsData">
      <i class='uil uil-chart-pie'></i>
      <p>{{topCard.something}}</p>
    </div>
  </div><!---global-grid ends here-->


   



   <div id="dashboard" class="global-container mdl-shadow--2dp">
      
          <div class="global-col">
            <h3>this module title here</h3>
            <div class="global-container">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod maxime sapiente perferendis repellat officia, aliquid quos quibusdam blanditiis sequi voluptates voluptatum dolore quam, repudiandae iusto ipsa suscipit, labore dignissimos!</p>
            </div>
          </div>


      <div class="global-grid">
          
            <div id="yourservices" class="global-col">
              <h3>this module title here</h3>
              <div class="global-container">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora vero ratione odio, quos dolore aliquid! Doloremque porro, dolorum minima recusandae quia officiis, aliquid, iusto corporis iste ad reprehenderit exercitationem non!</p>
              </div>
            </div>
          <!------------>
            <div id="somethingidk" class="global-col">
              <h3>this module title here</h3>
              <div class="global-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illo odio asperiores quia? Cupiditate, necessitatibus velit nulla quibusdam ducimus, quas error odit numquam, excepturi tempora aliquid facere cumque. Alias, unde.</p>
              </div>
            </div>

      </div><!---global grid-->
   </div><!---global conteiner--->







</div>      
</template>

<script>
export default {
  name: "Home",
  data() {
    return {

      topCards:[
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},
        {'something': 'something in here idk'},       
      ],
    
    
    
    }
  }
} 
</script>

<style scoped>
#dashboard{
  text-align: left;
  width:90%;
  border-radius:8px;
}

#somethingidk,#yourservices{
  width:50%;
}

.global-col h3{
  padding:22px;
}
.global-col{
  padding:22px;
}

</style>
