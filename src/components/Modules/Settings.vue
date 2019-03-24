<template>
<div id="settings">
   
        <div id="search-header" class="global-header mdl-shadow--2dp">
          <h3 class="global-header-title-only">Settings</h3>
          
          <div id="search-input" class="global-search">
            <i class='uil uil-search'></i>
            <input type="text" placeholder="type something" v-model="search">
            <i class='uil uil-filter'></i>
          </div>
        </div><!--search header-->


   <div class="global-content">

      <div class="global-grid">
           




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

