<template>
<section class="container">
    <h1>Register</h1>
        <div class="row">
            <div class="form-group">

                <label for="name">Name:</label>
                <input type="text" name="name" v-model="name">
                <br>

                <label for="lastName">Last Name:</label>
                <input type="text" name="lastName" v-model="lastName">
                <br>

                <label for="email">Email:</label>
                <input type="text" name="email" v-model="email">
                <br>

                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
                <br>

                <label for="dni">Dni(Cedula):</label>
                <input type="text" name="dni" v-model="dni">
                <br>

                <label for="accountType">account Type:</label>
                <input type="text" name="accountType" v-model="accountType" >
                <br>

                <button class="btn">Register</button>


            
        </div>
    </div>
</section>
    
</template>
<script>
export default {
    name: 'Register',
    data(){
        return{
            name: null,
            lastName: null,
            email: null,
            password: null,
            dni: null,
            accountType: []            
        }
    },

    methods:{
       
    }
    
}
</script>

