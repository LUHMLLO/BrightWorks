<template>
    <ul class="global-grid">
        <h4>Cart</h4>
        <li class="global-col" v-for="(service,activeServicesData) in activeServices" :key="activeServicesData">
            {{service.name}} - ${{service.price}}

            <button @click="$emit('remote-from-cart', service)" class="global-button float- right">Remove from cart</button>
        </li>
    </ul>
</template>

<script>
import {firebase, db} from '@/firebaseConfig.js'
export default {
    name:'cart',
    
    data(){
        return{
            activeServices:[],
            cart:[],

            
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

     
}
</script>
