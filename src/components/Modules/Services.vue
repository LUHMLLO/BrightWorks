<template>
  <div id="services" class="container">
    <section class="form">
      <form aclass="text-cent" @submit.prevent = 'createService'>
          <label >ID</label>
        <input v-model="serviceData.name_id" type="text" class="form-control">
        <label >Name</label>
        <input v-model="serviceData.name" type="text" class="form-control" >
        <label >Description</label>
        <input v-model="serviceData.description"    type="text" class="form-control" >
        <label >Estimated Time</label>
        <input v-model="serviceData.estimatedTime" type="text" class="form-control" >
        <label >Price</label>
        <input v-model="serviceData.price" type="text" class="form-control">
        <label >Scherdule</label>
        <input v-model="serviceData.scherdule" type="text" class="form-control">
        <!-- Button to submit -->
        <button type="submit" class="btn btn-primary my-2">Crear</button>
      </form>
    </section>

    <section class="data">
      <caption>Servicio</caption>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Estimated Tim</th>
            <th scope="col">Price</th>
            <th scope="col">Scherdule</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(service) in sortedServices" :key="service.id">
            <template v-if="editId == service.id">
                <td><input v-model="editServiceData.name_id" type="text"></td>
                <td><input v-model="editServiceData.name" type="text"></td>
                <td><input v-model="editServiceData.description" type="text"></td>
                <td><input v-model="editServiceData.estimatedTime" type="text"></td>
                <td><input v-model="editServiceData.price" type="text"></td>
                <td><input v-model="editServiceData.scherdule" type="text"></td>
                <td>
                    <span class="icon">
                        <i @click="onEditSubmit(product.id)" class="fa fa-check"></i>
                    </span>
                    <span>
                        <i @click="onCancel" class="fa fa-ban"></i>
                    </span>
                </td>
            </template>
            <template v-else>
                <td>
                    {{service.name_id}}
                </td>

                <td>
                    {{service.name}}
                </td>

                <td>
                    {{service.description}}
                </td>

                <td>
                    {{service.estimatedTime}}
                </td>

                <td>
                    {{service.price}}
                </td>

                <td>
                    {{service.scherdule}}
                </td>

                <td>
                    <a href="#">
                        <i @click="onEdit(service)" class="fa fa-pencil"></i>
                    </a>
                </td>
            </template>
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
        editId:'',
        serviceData: {

      id: "",
      name: "",
      name_id: "",      
      description: "",
      estimatedTime: "",
      price: "",
      scherdule: ""

        },

        editServiceData:{

      id: "",
      name: "",
      name_id: "",
      description: "",
      estimatedTime: "",
      price: "",
      scherdule: ""    

        },          
      services: []
    }
  },
  created(){
      this.getService()
  },
  computed:{
    
      sortedServices(){
          return this.services.slice().sort((a,b)=>{
              return a.name_id - b.name_id
          })
      }
  },
  methods: {

      getService(){
          db.collection('services')
          .get()
          .then(querySnapshot =>{
              var services = {};
                           

              var servicesArray = []
              let i = 0
              querySnapshot.forEach((doc)=>{
                  servicesArray.push(doc.data())
                  servicesArray[i].id = doc.id
                  this.services.push(servicesArray[i])
                  i++
              })
            this.services = services
          })
      },

      createService(){
          db.collection('services').add(this.serviceData).then(this.getService)
          this.serviceData.name_id = ''
          this.serviceData.name = ''
          this.serviceData.description = ''
          this.serviceData.estimatedTime = ''
          this.serviceData.price = ''
          this.serviceData.scherdule = ''
      },

          onDelete(id){
           db.collection('services').doc(id).delete().then(()=>{
           this.getService()
      })
    },

        onEdit(service){
      this.editId = service.id
      this.editServiceData.name_id = service.name_id
      this.editServiceData.name = service.name
      this.editServiceData.description = service.description
      this.editServiceData.estimatedTime = service.estimatedTime
      this.editServiceData.price = service.price
      this.editServiceData.scherdule = service.scherdule
          },

        onCancel(){
      this.editId = ''
      this.editServiceData.name_id = ''
      this.editServiceData.name = ''
      this.editServiceData.description = ''
      this.editServiceData.estimatedTime = ''
      this.editServiceData.price = ''
      this.editServiceData.scherdule = ''

    },

    onEditSubmit (id){
      db.collection("services").doc(id).set(this.editServiceData).then(
        this.getService)
        this.editId = ''
        this.editServiceData.name_id = ''
        this.editServiceData.name = ''
        this.editServiceData.description = ''
        this.editServiceData.estimatedTime = ''
        this.editServiceData.price = ''
        this.editServiceData.scherdule = ''
    }

    // crearServicio: function() {
    //   var servicio = {};
    //   servicio.name = this.name;
    //   servicio.description = this.description;
    //   servicio.estimatedTime = this.estimatedTime;
    //   servicio.cost = this.price;
    //   servicio.availableHours = this.scherdule;
    //   this.services.push(servicio);
    },

    // verFormActualizar: function(servicio_id) {
    //   this.idActualizar = servicio_id;
    //   this.nameActualizar = this.services[servicio_id].name;
    //   this.descriptionActualizar = this.services[servicio_id].description;
    //   this.estimatedTimeActualizar = this.services[servicio_id].estimatedTime;
    //   this.priceActualizar = this.services[servicio_id].price;
    //   this.scherduleActualizar = this.services[servicio_id].scherdule;
    //   this.formActualizar = true;
    // },

    // borrarServicio: function(servicio_id) {
    //   this.services.splice(servicio_id, 1);
    // },

    // guardarActualizacion: function(servicio_id) {
    //   // Ocultamos nuestro formulario de actualizar
    //   this.formActualizar = false;
    //   // Actualizamos los datos
    //   this.services[servicio_id].name = this.nameActualizar;
    //   this.services[servicio_id].description = this.descriptionActualizar;
    //   this.services[servicio_id].estimatedTime = this.estimatedTimeActualizar;
    //   this.services[servicio_id].price = this.priceActualizar;
    //   this.services[servicio_id].scherdule = this.scherduleActualizar;

    // }
  }

//   created() { 
//     db.collection("services")
//       .get()
//       .then(querySnapshot => {
//         querySnapshot.forEach(doc => {
//           const data = {
//             name: doc.data().name,
//             description: doc.data().description,
//             estimatedTime: doc.data().estimatedTime,
//             cost: doc.data().doc,
//             availableHours: doc.data().availableHours,
            
//           };
//           this.services.push(data);
//         });
//       });
//   }
// };
</script>
