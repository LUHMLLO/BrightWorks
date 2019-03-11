<template>
    <div id="services" class="container">
        <section class="form">
            <form action="" class="text-cent">
                <input v-model="nombre" @keyup.enter="crearServicio" type="text" class="form-control" placeholder="Nombre">
                <input v-model="descripcion" @keyup.enter="crearServicio" type="text" class="form-control" placeholder="Descripcion">
                <!-- Button to submit -->
                <input @click="crearServico" type="button" value="Crear" class="btn btn-success">
            </form>
        </section>

        <section class="data">
            <caption>Servicio</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(servicio, index) in servicios" :key="index">
                        <td>{{ servicio.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato nombre -->
                                {{ servicio.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <!-- Formulario para actualizar -->
                                <input v-model="descripcionActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato descripcion -->
                                {{ paciente.descripcion }}
                            </span>
                        </td>
                        <td>
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-warning">Actualizar</button>
                                <!-- Botón para borrar -->
                                <button @click="borrarServicio(index)" class="btn btn-danger">Borrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>
<script>
export default {
    name: "services",
    data(){
        return{
            nombre: '',
            descripcion:'',
            formActualizar: false,
            idActualizar: -1,
            nombreActualizar:'',
            descripcionActualizar:'',
            servicios:[]
        }        
    },
    methods:{
            crearServicio: function(){
                this.servicios.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    descripcion: this.descripcion
                });
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.descripcion = '';
            },

            verFormActualizar: function(servicio_id){
                this.idActualizar = servicio_id;
                this.nombreActualizar = this.servicios[servicio_id].nombre;                
                this.descripcionActualizar = this.servicios[servicio_id].descripcion;
                this.formActualizar = true;
            },

            borrarServicio: function(servicio_id){
                this.servicios.splice(servicio_id, 1);
            },

            guardarActualizacion: function (servicio_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;
                // Actualizamos los datos
                this.servicios[servicio_id].nombre = this.nombreActualizar;
                this.servicios[servicio_id].descripcion = this.descripcionActualizar;
            }
            
        }
    
}
</script>
