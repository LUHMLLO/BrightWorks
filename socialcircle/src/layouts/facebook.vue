<template>
    <div>
        <Navbar />
        <div class="row debug vh-100">
            <Sidebar class="col-1 h-100" />
            <div class="col-9 h-100">
                <slot/>
            </div>
            <Sidebar class="col-2 h-100" />
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