<style>
  .cuadro{
    border: 1px solid red;
    padding: 5%;
    background-color: rgba(29, 46, 135, 0.53);
    color: rgba(29, 46, 135, 0.53);
  }
</style>

<template>
  <v-tabs v-model="active" color="cyan" dark show-arrows ripple slider-color="yellow">
    <v-tab ripple >Form</v-tab>
    <v-tab ripple >Model</v-tab>
    <v-tab ripple >Schema</v-tab>
    <v-tab ripple >Options</v-tab>
    <v-tab ripple >Tabla </v-tab>
					
    <v-tab-item class="ma-5">
      <v-form>
        
        <v-card class="mx-auto"  style="max-width: 750px;">
          <v-card-text class="text-xs-center">
            <h1>{{schema.Titulo}}</h1>
          </v-card-text>
          <v-form class="pa-3 pt-4" > 
          <div class="cuadro">
          <strong>{{model}}</strong>
          </div>
                  
                  <v-btn color="red darken-1" dark @click="actualizar()"> test </v-btn>
                  <generadorForm 
                  :model="model" 
                  :schema="schema.fields" 
                  :options="options"
                  >
                  </generadorForm>
                <v-card-actions>
                  <v-btn flat color="primary">ENVIAR</v-btn>
                  <v-btn flat color="red">CERRAR</v-btn>
                </v-card-actions>

          </v-form>
        </v-card>
      </v-form>
		</v-tab-item>
    <v-tab-item>
        <pre>Model: {{model}}</pre>
    </v-tab-item>
    <v-tab-item>
        <pre>Schema: {{schema}}</pre>
    </v-tab-item>
    <v-tab-item>
        <pre>Option: {{options}}</pre>
    </v-tab-item>
    <v-tab-item>
        <generadorTabla> </generadorTabla>
    </v-tab-item>



  </v-tabs>
</template>
<script>
import generadorTabla from "./Tablas/generadorTabla.vue";
import generadorForm from "./Formularios/generadorForm.vue";
//import pdfvue from "./inicio/pdf.vue";
//import PDF from "jspdf";
export default {
  components: { generadorForm, generadorTabla },
  data() {
    return {
      item: {},
      active: null,
      cnt: 0,
      model: {
        name: "Garcia",
        password: "Es un secreto",
        status: true,
        usePassword: true,
        telefono: "0" + 123456789,
        ventajas: [
          {
            nombre: "Test1",
            apellido: "Testeo"
          },
          {
            nombre: "Test2",
            apellido: "Testeo"
          }
        ]
      },
      schema: {
        Titulo: "FORMULARIOS",
        fields: [
          {
            type: "text",
            label: "Nombre",
            model: "name",
            counter: "15",
            //placeholder: "Tu nombre",
            rules: "nameRules",
            featured: true,
            required: true,
            size: "sm12"
          },
          {
            type: "text",
            label: "Apellido",
            model: "apellido",
            counter: "15",
            //placeholder: "Tu nombre",
            rules: "nameRules",
            featured: true,
            required: true,
            size: "sm12"
          },
          {
            type: "text",
            label: "Teléfono",
            model: "telefono",
            mask: "phone",
            //placeholder: "Teléfono",
            rules: "required",
            featured: true,
            required: true
          },
          {
            type: "Add_Fields",
            label: "Ventajas",
            model: "ventajas",
            schema: {
              Titulo: "AGREGADOS",
              fields: [
                {
                  type: "text",
                  label: "Nombres",
                  model: "nombre",
                  counter: "15",
                  //placeholder: "Tu nombre",
                  rules: "nameRules",
                  featured: true,
                  required: true,
                  size: "sm5 xs12"
                },
                {
                  type: "text",
                  label: "Apellido",
                  model: "apellido",
                  counter: "15",
                  //placeholder: "Tu apellido",
                  rules: "nameRules",
                  featured: true,
                  required: true,
                  size: "sm5 xs12"
                } /*,
                {
                  type: "text",
                  label: "Apellidos",
                  model: "apellido",
                  counter: "15",
                  placeholder: "Tu nombre",
                  rules: "nameRules",
                  featured: true,
                  required: true,
                  size: "sm5"
                }*/
              ]
            },
            featured: true,
            required: true
          },
          {
            type: "number",
            label: "ID (deshabilitado text field)",
            model: "id",
            readonly: true,
            disabled: true
          },
          {
            type: "checkbox",
            label: "Use password?",
            model: "usePassword"
          },
          {
            type: "password",
            label: "Password",
            model: "password",
            disabled: false,
            min: 6,
            required: true,
            hint: "Minimum 6 characters",
            passwordVisible: false
          },
          {
            type: "autocomplete",
            label: "Skills",
            model: "skills",
            values: ["Javascript", "VueJS", "CSS3", "HTML5"]
          },
          {
            type: "email",
            label: "E-mail",
            model: "email",
            placeholder: "User's e-mail address"
          },
          {
            type: "checkbox",
            label: "Status",
            model: "status",
            default: true
          }
        ],
        groups: [
          {
            key: "userDetails",
            legend: "USUARIO Details",
            fields: [
              {
                type: "textarea",
                label: "My story",
                model: "story"
              },
              {
                type: "email",
                id: "email",
                label: "Email Address",
                model: "email"
              }
            ]
          },
          {
            key: "preferences",
            legend: "PREFERENCIA",
            fields: [
              {
                type: "select",
                label: "Color",
                model: "color",
                values: ["Red", "Green", "Blue"]
              },
              {
                type: "number",
                id: "timeout",
                label: "Timeout in Seconds",
                model: "timeout"
              }
            ]
          }
        ]
      },
      options: {}
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      return 0;
    },
    actualizar() {
      this.cnt = this.cnt + 1;
      this.$set(this.model.ventajas[0], "nombre", "hola" + this.cnt);
      //this.model.ventajas[0].nombre = "hola" + this.cnt;
      this.$set(this.model, "name", "Andres" + this.cnt);
    }
  }
};
</script>
