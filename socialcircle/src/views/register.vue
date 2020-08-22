<template>
    <div id="register" class="row flex-center align-content-center align-items-center vh-100">
        
        <div class="image-background image-overlay image-blur">
            <img src="https://cdn.dribbble.com/users/760333/screenshots/6107273/makersco.gif" alt="">
        </div>

        <form @submit.prevent class="col-4 sm:col-8 depth-3 padding-25 bg-grey-lighten-5 round-3">
            <h2 class="color-grey-darken-3">Sign Up</h2>
            <p class="color-grey-darken-2 font-size-14 margin-0">Get started and join the others in the platform</p>

            <div class="row row-adjust  margin-y-25">
                <div class="col-6 sm:col-12">
                    <p class="margin-0 d-block font-size-14 color-grey-darken-2">Name</p>
                    <input v-model="name" name="name" type="text" 
                    class="border-grey border-solid w-100 round-3 padding-y-5 padding-x-10">
                    <small class="color-grey-lighten-1">Example:. Carl, Mary, Martin..</small>
                </div>
                <div class="col-6 sm:col-12">
                    <p class="margin-0 d-block font-size-14 color-grey-darken-2">Email</p>
                    <input v-model="email" name="email" type="text" class="border-grey border-solid w-100 round-3 padding-y-5 padding-x-10">
                    <small class="color-grey-lighten-1">Example:. yourname@email.com</small>
                </div>
                <div class="col-12">
                    <p class="margin-0 d-block font-size-14 color-grey-darken-2">Password</p>
                    <input v-model="password" name="password" type="text" class="border-grey border-solid w-100 round-3 padding-y-5 padding-x-10">
                    <small class="color-grey-lighten-1">Must have 8+ characters</small>
                </div>
            </div>
            <label class="form-checkbox">
                <input type="checkbox">
                <i class="form-icon"></i>
                <span class="color-grey-darken-2">Creating an account means you´re okay with our Terms of Service and Our Privacy Policy</span>
            </label>
            <button class="round-3 bg-green-lighten-2 border-transparent font-size-14 color-grey-lighten-5 text-align-center" @click="signUp">Create Account</button>

        </form>

    </div>
</template>

<script>
import { firebase , db } from '../firebaseConfig.js'
import Swal from 'sweetalert2'
export default {
    name: "register",
    data(){
        return{
            name:null,
            email:null,
            password:null,
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (credentials) => {
                    return db.collection('users').doc(credentials.user.uid).set({
                        user_id: credentials.user.uid,
                        name: this.name,
                        email: this.email,
                        type: 'client',
                    }).then(
                        Swal.fire({
                            type: 'success',
                            title: 'Your account has been registered',
                            text: 'Start browsing the page',
                        }).then( 
                            ()=> this.$router.replace("home")
                        )
                    )
                },
                (err) => {
                    Swal.fire({
                        type: 'error',
                        title: 'Oops!',
                        text: err.message
                    })
                }
            );
        },
    }
}
</script>