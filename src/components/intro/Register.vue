<template>
   <section class="content">
       <h1>Register</h1>
       <div class="box-body">
           <div class="row">
               
               <div class="col-md-6">
                   <div class="form-group">
                       <input type="text" id="name" name="name" v-model="name" placeholder="name">
                       <br>
                       <input type="text" id="lastName" name="lastName" v-model="lastName" placeholder="lastName">
                       <br>
                       <input type="text" id="email" name="email" v-model="email" placeholder="email">
                       <br>
                       <input type="text" id="password" name="password" v-model="password" placeholder="password">
                       <br>
                       <input type="text" id="dni" name="dni" v-model="dni" placeholder="dni">
                       <br>
                        <select id="accountType">
                            <option value="Client" class="readOnly">Account type</option>
                            <option value="Admin">Admin</option>
                            <option value="Contractor">Contractor</option>
                            <option value="Client">Client</option>
                        </select> 
                        <br>
                        <button @click="set()">submit</button>
      
    
                     </div>
                      

                   </div>
                   
               </div>

           </div>    

   </section>
</template>

<script>
import db from '../../firebaseInit'
export default {
    name:"register",
    data(){
        return{
            name: null,
            lastName: null,
            email: null,
            password: null,
            dni: null,
            accountType: null,
            
        }

    },
    methods:{
        saveContact () {
          db.collection('register').add({
            name: this.name,
            name: this.name,
            email: this.email,
            dni: this.dni,
            accountType: this.accountType,
            slug: this.generateUUID()
          }).then(function (docRef) {
              console.log('Document written with ID: ', docRef.id)
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })   
        },
        generateUUID () {
          let d = new Date().getTime()
          let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16)
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
          })
          return uuid
        }
    }
}


</script>
