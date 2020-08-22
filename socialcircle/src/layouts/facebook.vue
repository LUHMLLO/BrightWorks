<template>
    <div>
        <Navbar />
        <div class="row bg-grey-lighten-4 vh-100">
            <Sidebar class="col-2 md:col-3 h-100 bg-grey-lighten-3" />
            <div class="col-10 md:col-9 h-100 padding-25 bg-grey-lighten-5 depth-1">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "facebook_layout",
        components: {
            Navbar: () => import('../components/navbar'),
            Sidebar: () => import('../components/sidebar'),
        },
    }
</script>