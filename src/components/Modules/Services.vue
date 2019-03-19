<template>
  <div id="services" class="container">
    <section class="form">
      <form aclass="text-cent" @submit.prevent>
        <input v-model="nombre" type="text" class="form-control" placeholder="Nombre">
        <input v-model="descripcion" type="text" class="form-control" placeholder="Descripcion">
        <input
          v-model="tiempoEstimado"
          type="text"
          class="form-control"
          placeholder="tiempoEstimado"
        >
        <input v-model="costo" type="text" class="form-control" placeholder="costo">
        <input
          v-model="horarioDisponible"
          type="text"
          class="form-control"
          placeholder="horarioDisponible"
        >
        <!-- Button to submit -->
        <button v-on:click="crearServicio" class="mdl-btn">Crear</button>
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
            <th scope="col">Tiempo Estimado</th>
            <th scope="col">costo</th>
            <th scope="col">horario disponible</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(servicio, index) in servicios" :key="index">
            <td>{{servicio.id}}</td>
            <td>
              <span v-if="formActualizar && idActualizar == index">
                <!-- Formulario para actualizar -->
                <input v-model="nombreActualizar" type="text" class="form-control">
              </span>
              <span v-else>
                <!-- Dato nombre -->
                {{ servicio.name }}
              </span>
            </td>

            <td>
              <span v-if="formActualizar && idActualizar == index">
                <!-- Formulario para actualizar -->
                <input v-model="descripcionActualizar" type="text" class="form-control">
              </span>
              <span v-else>
                <!-- Dato descripcion -->
                {{ servicio.description }}
              </span>
            </td>

            <td>
              <span v-if="formActualizar && idActualizar == index">
                <!-- Formulario para actualizar -->
                <input v-model="tiempoEstimadoActualizar" type="text" class="form-control">
              </span>
              <span v-else>
                <!-- Dato descripcion -->
                {{ servicio.stimateTime }}
              </span>
            </td>

            <td>
              <span v-if="formActualizar && idActualizar == index">
                <!-- Formulario para actualizar -->
                <input v-model="costoActualizar" type="text" class="form-control">
              </span>
              <span v-else>
                <!-- Dato descripcion -->
                {{ servicio.cost }}
              </span>
            </td>

            <td>
              <span v-if="formActualizar && idActualizar == index">
                <!-- Formulario para actualizar -->
                <input v-model="horarioDisponibleActualizar" type="text" class="form-control">
              </span>
              <span v-else>
                <!-- Dato descripcion -->
                {{ servicio.availableHours }}
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
import { db } from "../../firebaseConfig.js";

export default {
  name: "Services",
  data() {
    return {
      nombre: "",
      descripcion: "",
      tiempoEstimado: "",
      costo: "",
      horarioDisponible: "",
      formActualizar: false,
      idActualizar: -1,
      nombreActualizar: "",
      descripcionActualizar: "",
      tiempoEstimadoActualizar: "",
      costoActualizar: "",
      horarioDisponibleActualizar: "",
      servicios: []
    };
  },
  methods: {
    crearServicio: function() {
      var servicio = {};
      servicio.name = this.nombre;
      servicio.description = this.descripcion;
      servicio.tiempoEstimado = this.stimateTime;
      servicio.costo = this.cost;
      servicio.horarioDisponible = this.availableHours;
      this.servicios.push(servicio);
    },

    verFormActualizar: function(servicio_id) {
      this.idActualizar = servicio_id;
      this.nombreActualizar = this.servicios[servicio_id].nombre;
      this.descripcionActualizar = this.servicios[servicio_id].descripcion;
      this.tiempoEstimadoActualizar = this.servicios[servicio_id].tiempoEstimado;
      this.costoActualizar = this.servicios[servicio_id].costo;
      this.horarioDisponibleActualizar = this.servicios[servicio_id].horarioDisponible;
      this.formActualizar = true;
    },

    borrarServicio: function(servicio_id) {
      this.servicios.splice(servicio_id, 1);
    },

    guardarActualizacion: function(servicio_id) {
      // Ocultamos nuestro formulario de actualizar
      this.formActualizar = false;
      // Actualizamos los datos
      this.servicios[servicio_id].nombre = this.nombreActualizar;
      this.servicios[servicio_id].descripcion = this.descripcionActualizar;
      this.servicios[servicio_id].tiempoEstimado = this.tiempoEstimadoActualizar;
      this.servicios[servicio_id].costo = this.costoActualizar;
      this.servicios[servicio_id].horarioDisponible = this.horarioDisponibleActualizar;

    }
  },

  created() { 
    db.collection("services")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            name: doc.data().name,
            description: doc.data().description,
            stimateTime: doc.data().estimateTime,
            cost: doc.data().doc,
            availableHours: doc.data().availableHours,
            services: doc.data().services
          };
          this.servicios.push(data);
        });
      });
  }
};
</script>
