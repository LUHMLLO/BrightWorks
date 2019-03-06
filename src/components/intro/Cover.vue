<template>
    <div id="cover">




        <div>
            <h1>Bright Works</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi sit accusamus tempore sint itaque sapiente, temporibus ipsum excepturi possimus distinctio asperiores. Quos distinctio fugiat esse mollitia illo explicabo libero!</p>
        </div>



        <div>

            <router-link to="/login">
            <a>Log In</a>
            </router-link>
 <br>
 <br>
            <router-link to="/signup">
            <a>Sign Up</a>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "Cover",
    data(){
        return{

        }
    }
}
</script>

<style>

</style>
