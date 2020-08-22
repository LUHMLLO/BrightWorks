<template>
    <div class="sidebar padding-y-25 padding-x-0">
        <div class="d-flex flex-column margin-bottom-10" v-for="(sections,index) in sections" :key="index">
            <h6 class="font-bolder font-size-11 color-grey-darken-2 padding-x-25">{{sections.name}}</h6>

            <router-link to="/" 
                class="color-grey-darken-1 color-green-lighten-2-hover bg-grey-lighten-5-hover depth-1-hover d-flex padding-x-25 
                margin-0 border-left-solid border-left-transparent border-left-green-lighten-2-hover" 
                v-for="(direction,index) in sections.directions" :key="index">
                <i class="font-size-13 margin-right-5" :class="direction.icon"></i>
                <span aria-current="page" class="font-size-13">{{direction.name}}</span>
            </router-link>

            <div class="padding-x-25 padding-y-10">
                <div class="border-bottom-solid border-bottom-grey-lighten-2 padding-5 w-100"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data(){
            return{

                sections:[
                    {
                        name: "What´s new",
                        directions:[
                            {
                                name: "Timeline",
                                icon: "uil uil-newspaper",
                            },
                            {
                                name: "Events",
                                icon: "uil uil-calendar-alt",
                            },
                            {
                                name: "Rooms",
                                icon: "uil uil-presentation",
                            },
                        ],
                    },
                    {
                        name: "Explore",
                        directions:[
                            {
                                name: "Pages",
                                icon: "uil uil-browser",
                            },
                            {
                                name: "Shop",
                                icon: "uil uil-store",
                            },
                            {
                                name: "Fundraisers",
                                icon: "uil uil-invoice",
                            },
                            {
                                name: "Saved",
                                icon: "uil uil-bookmark",
                            },  
                        ],
                    },
                    {
                        name: "Social",
                        directions:[
                            {
                                name: "Messages",
                                icon: "uil uil-inbox",
                            },
                            {
                                name: "Groups",
                                icon: "uil uil-users-alt",
                            },
                        ],
                    },
                ]

            }
        }
    }
</script>