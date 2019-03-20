<template>
<div id="settings">
   
        <div id="search-header" class="global-header mdl-shadow--2dp">
          <h3 class="global-header-title">Settings</h3>
          
          <div id="search-input" class="global-search">
            <i class='uil uil-search'></i>
            <input type="text" placeholder="type something" v-model="search">
            <i class='uil uil-filter'></i>
          </div>
        </div><!--search header-->


   <div class="global-content">

      <div class="global-grid mdl-grid">
           




           <div class="global-card-pill mdl-shadow--2dp" v-for="(setting,settingsData) in settings" :key="settingsData">

               <div class="global-card-pill-header">
                   <p>{{setting.name}}</p>
                   <i class='uil uil-toggle-off' v-if="isTheme" v-on:click="isTheme = false"></i>
                   <i class='uil uil-toggle-on'  v-if="!isTheme" v-on:click="isTheme = true"></i>
               </div>
               <div class="global-card-pill-content">
                   <p>{{setting.description}}</p>
               </div>
                              

           </div>





      </div>
   </div><!--global content-->
</div>    
</template>

<script>
export default {
    name: 'Settings',
    data(){
        return{
            search:null,
            isTheme: true,


            settings:[
                {name: 'Switch themes', description: 'Switch between light and dark themes.'},
                {name: 'Switch themes', description: 'Switch between light and dark themes.'},
                {name: 'Switch themes', description: 'Switch between light and dark themes.'},
                {name: 'Switch themes', description: 'Switch between light and dark themes.'},
            ],

        }
    }
    
}
</script>

<style scoped>
  .global-header{
    width:100%;
    margin:auto;
    min-height: 300px;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .global-header-title{
    margin:auto auto -42px auto;
    align-self: middle;
    display: inline-block;
    width:300px;
  }

  .global-search{
    display: flex;
    margin:auto;
    align-self: middle;
    justify-content: center;
    border-bottom:solid 1px rgba(0,0,0,0.6);
  }
  .global-search i{
    border: none;
    margin:auto;
    align-self: middle;
    display: inline-block;
    outline:none;
  }
  .global-search input{
    border: none;
    margin:auto;
    align-self: middle;
    display: inline-block;
    padding:12px;
    outline:none;
  }


  .global-content{
    padding:22px;
  }

  .global-grid{
    align-content: center;
    justify-content: center;
    width:100%;
    padding-top: 42px;
  }



  .global-card-pill{
      padding:12px;
      border-radius:12px;
      width:300px;
      margin:auto;
      display: block;
  }
  .global-card-pill-header{
      display: flex;
      justify-content: center;
      width:100%;
      padding: 22px 0;
      border-bottom: solid 0.5px rgba(0,0,0,0.3);
      margin: auto;
      align-self: middle;
  }
  .global-card-pill-header i {
      font-size: 30px;
      margin:auto;
      align-self: middle;
      cursor:pointer;
  }
  .global-card-pill-header p {
      font-size: 22px;
      margin:auto;
      align-self: middle;
  }
  .global-card-pill-content{
      padding: 22px 10px 0px 10px;
      margin:auto;
      align-self: middle;
  }
</style>