<template>
<div>





            <div id="available-section" class="global-section">
                <h4>Available services</h4>
                <div class="global-grid">
                    
                    <div class="global-service-card mdl-shadow--3dp"   v-for="(service,servicesData) in services" :key="servicesData">
                        <div class="global-service-card-img">
                            <img src="https://cdn.dribbble.com/users/63407/screenshots/5462636/dribbble_taxi_cab_ride.png">
                        </div><!-- global service card img-->
                        <div class="global-service-card-content">
                            <div class="global-service-card-name">
                                <h4>{{service.name}}</h4>
                            </div>
                            <div class="global-service-card-description">
                                <p>{{service.description}}</p>
                            </div>
                        </div><!---global service card content -->
                    </div><!--service card-->
                </div>
            </div><!---available section-->


            <br><br><br><br>


            <div id="unavailable-section" class="global-section">
                <h4>Not available services</h4>
                <div class="global-grid">
                    
                    <div class="global-service-card mdl-shadow--3dp"   v-for="(service,servicesData) in services" :key="servicesData">
                        <div class="global-service-card-img">
                            <img src="https://cdn.dribbble.com/users/63407/screenshots/5462636/dribbble_taxi_cab_ride.png">
                        </div><!-- global service card img-->
                        <div class="global-service-card-content">
                            <div class="global-service-card-name">
                                <h4>{{service.name}}</h4>
                            </div>
                            <div class="global-service-card-description">
                                <p>{{service.description}}</p>
                            </div>
                        </div><!---global service card content -->
                    </div><!--service card-->
                </div>
            </div><!---available section-->









</div>
</template>





<script>
export default {
    name: 'ManageProvideServices',
    data(){
        return{

            services:[
                {name:'service name', description: 'service description goes here'},
                {name:'service name', description: 'service description goes here'},
                {name:'service name', description: 'service description goes here'},
            ],

        }
    }
}
</script>
