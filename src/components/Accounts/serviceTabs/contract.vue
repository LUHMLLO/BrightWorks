<template>
<div>

<div class="global-box mdl-shadow--2dp" :isInCart="isInCart(service)" v-on:add-to-cart="addToCart(service)" v-for="(service,activeServicesData) in activeServices" :key="activeServicesData">
<div class="global-card-pill">
    <div class="card-body">
        <h5 class="global-card-pill-header">{{service.name}}</h5>
        <label class="global-box-content-label">Price:</label>
        <p class="global-card-pill-content">{{service.price}}</p>
        <label class="global-box-content-label">Scherdule:</label>
        <p class="global-card-pill-content">{{service.schedule}}</p>


        <button v-if="accountType == 'client'" :disabled="isInCart" @click="$emit('add-to-cart', service)" class="btn global-button-round">
            {{isInCart ? 'Added to cart' : 'Add to cart'}}
        </button>
    </div>
</div>
</div>

<div class="col-md-6 global-grid" v-if="accountType == 'client'">
    <cart class="global-col" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
</div>


</div>
</template>



<script>
import {firebase, db} from '@/firebaseConfig.js'
import Cart from '../../Modules/ShoppingCart/Cart.vue'

export default {
    name:'contract',
<<<<<<< HEAD
<<<<<<< HEAD
    components:{
      Cart  
    },
=======
    props:['serviceurlname'],
>>>>>>> c162569b0372a3b15f2d589d3c22ad3ddc4ef55b
=======
    props:['serviceurlname'],
>>>>>>> c162569b0372a3b15f2d589d3c22ad3ddc4ef55b
    data(){
        return{
            activeServices:[],
            cart:[],

            addingNewService:false,
            IsPanelVisible:true,
            IsReviewsVisible:true,
            IsServicesVisible:true,
            IsTaskVisible:true,
            accountType:null,

        }
    },

    beforeCreate(){
    let self = this;  

    if(firebase.auth().currentUser){
        this.isLoggedIn = true
        this.currentUser = firebase.auth().currentUser.email


        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(function(snapshot)
        {           
                //console.log('Document data:', snapshot.data().AccountType);
                    if(snapshot.data().img == ''){
                        self.userimg = 'https://cdn.dribbble.com/users/937082/screenshots/5516643/blob'
                    }
                    else{
                        self.userimg = snapshot.data().img
                    }

                    self.user_id = snapshot.data().user_id

                    self.accountType = snapshot.data().AccountType
        })

    }
    else{
      this.isLoggedIn = false
    }


  },

    created(){
        let self = this;

          db.collection('services').where('owner_id','==',firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc.data().schedule)
                
                const data ={
                  
                   'service_id': doc.data().service_id,
                   'owner_id': doc.data().owner_id,
                   'img': doc.data().img,
                   'name': doc.data().name,
                   'description': doc.data().description,
                   'price': doc.data().price,
                   'schedule': doc.data().schedule,
                   'availability': doc.data().availability,
                   'url_name': doc.data().url_name,
                 }

                 if(doc.data().availability == true){
                   self.activeServices.push(data)
                 }

            })  
        })
    },

    methods:{

        addToCart(service){
            this.cart.push(service)            
        },

        isInCart(service){
            const item = this.cart.find(item => item.service_id = service.service_id)
            if(item){
                return true
            }
            return false
        },

        removeFromCart(service){
            this.cart = this.cart.filter(item => item.service_id !== service.service_id)
        }
    }
}
</script>

