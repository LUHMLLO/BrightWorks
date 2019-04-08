<template>
<div>
       <div class="global-grid"  v-if="!showForm">

           <div class="global-price-col mdl-shadow--2dp" v-for="(Plan,availablePlansData) in availablePlans" :key="availablePlansData">

               <div class="global-price-col-header">
                   <div class="global-price-col-header-title">
                       <h3>{{Plan.name}}</h3>
                   </div><!---title--->

                   <div class="global-price-col-header-price">
                       <h4>{{Plan.price}}</h4>
                       <span>/{{Plan.time}}</span>
                   </div>
               </div><!---header--->


               <div class="global-price-col-content">
                   <p>{{Plan.description}}</p>
               </div><!--content--->
               <button class="global-button" v-bind:value="Plan.plan_id" v-on:click="SelectThisPlan(Plan.plan_id)">Select</button>
           </div><!----global price col--->

       </div><!---grid-->




       <div id="contract-form-box" class="global-grid" v-if="showForm"> 
           <contract_form v-bind:selectedPlan="choosen_plan_id" v-bind:serviceimg="serviceimg" v-bind:servicename="servicename" v-bind:hidethiscontractform="showForm"/>
       
          <div id="gobackfombutton"  v-on:click="nevermind"  class="mdl-shadow--2dp">
              <i  class='uil uil-corner-up-left-alt' v-on:click="nevermind"></i>
          </div>
           
       


       </div>

            
           












</div>
</template>



<script>
import { db } from '../../../firebaseConfig.js'
import contract_form from './contract_form.vue'

export default {
    name:'contract',
    props:['serviceid'], 
    components:{
        contract_form,
    },
    data(){
        return{

               
          availablePlans:[],
          choosen_plan_id:null,
          showForm: false,
          serviceimg:null,
          servicename:null,
          

        }
    },




    created(){     
        this.getProps()
            //console.log(this.choosen_plan_id)



    },

    methods:{
        getProps(){
        let self = this;      
          db.collection('plans').where('service_id' , '==' , this.$props.serviceid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())

                const data ={
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price':  doc.data().price,
                   'service_id': doc.data().service_id,
                   'time': doc.data().time,
                   'plan_id': doc.data().plan_id,
                 }
                   self.availablePlans.push(data)

            })
          })




        },


        nevermind:function(){
            this.showForm = false
        },


        SelectThisPlan(value){
            this.choosen_plan_id = value
            //console.log(this.choosen_plan_id)
            

          db.collection('services').where('service_id' , '==' , this.$props.serviceid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data())
                   this.serviceimg = doc.data().img
                   this.servicename = doc.data().name

            })
          })


          this.showForm = true


        },




    },






   
}
</script>



<style scoped>
#gobackfombutton{
    z-index: 200;
    font-size:22px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    cursor: pointer;
    margin: 100px auto auto auto;
    background:white;
    border-radius:100px;
    padding:10px 22px;
    display:flex;
    justify-content: center;
    width:300px;
}
#gobackfombutton i{
    margin: auto;
    align-self: middle;
}
</style>
