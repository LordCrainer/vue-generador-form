<template>

 <div>
 ListIn
 <br>
 {{modelo}}
    <v-container v-for="(submodel,index_sub) in modelo" :key="index_sub*2" grid-list-xs text-xs-center >
    
      <v-layout row wrap >
        <v-flex xs2 class="mx-auto pa-4">
          <v-btn icon color="blue darkn-3" @click="Eliminar_Elemento(modelo,submodel,index_sub)" dark>
            <v-icon>delete</v-icon>
          </v-btn>
        </v-flex>
        <v-flex  xs10>
          <generadorForm 
          :model="submodel" 
          :schema="schema"
          :options="options">
          >
          </generadorForm>
        </v-flex>
            Longitud: {{modelo[index_sub]}}
            Indice : {{index_sub}}
      </v-layout>
    </v-container>

    <v-btn icon color="red darken-2" dark fab>
      <v-icon >add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import generadorForm from "./generadorForm.vue";
export default {
  name: "ListaEntrada",
  props: { modelo: Array, schema: Array, options: Object },
  components: { generadorForm },
  data() {
    return {};
  },
  methods: {
    Eliminar_Elemento(objeto, submodel, indice) {
      objeto.splice(indice, 1);
      //objeto[campo].splice(indice, 1);
      console.log(objeto);

      //this.$set(objeto, campo, objeto[campo]);
      //return objeto;
      //objeto[campo] = {nombre: "Car"}
      //this.$emit("input", objeto);
      //return objeto[campo][indice];
      //objecto[indice].nombre = "Otro sub_Valor";
      //this.$emit("input", '7');
    },
    AgregarElmento(objeto, ob, campo) {
      if (ob[campo] === undefined) {
        this.$set(ob, campo, []);
      }
      objeto = ob[campo];
      var indice = objeto.length;
      console.log(indice);
      if (indice === 0 || (indice > 0 && objeto[indice - 1] !== "")) {
        objeto.splice(0, 0, {});
      }
    }
  }
};
</script>
