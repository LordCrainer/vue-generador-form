<style scoped media="screen">
.table {
  margin: 0;
  padding: 0px;
}
</style>

<template>

<div style="width: 100%;">
    <div class="">
        <label class="text-uppercase">{{etiqueta}}</label>
    </div>
    <div v-for="(SubCampo, indice) in value" :key="indice">
        <table class="table">
            <tbody>
                <td style="width: 2%;">
                    <button type="button" name="button" class="btn btn-danger" @click="Eliminar_Elemento(indice)"> X </button>
                </td>
                <td style="width: 75%;">
                    <generadorForm   :model="model" :schema="schema" :options="options"/>
                    <component :is="tipo_subcampo" 
                    :value="value[indice]" 
                    @input="updateForm($event,indice)" 
                    :estilos="estilos" class="component" 
                    :placeholder="Propiedades(0,indice)" 
                    :nombre="Propiedades(1,indice)">
                    </component>
                </td>
            </tbody>
        </table>
    </div>
    <div>
        <button type="button" class="btn btn-success" v-on:click="Agregar_Elemento()"> + </button>
    </div>
</div>

</template>

<script>
//Funciones
import EntradaTexto from "./EntradaTexto.vue";
import EntradaArea from "./EntradaArea.vue";
import EntradaNumerica from "./EntradaNumerica.vue";
import generadorForm from "./";
export default {
  name: "EntradaListas",
  components: {
    EntradaTexto,
    EntradaArea,
    EntradaNumerica
  },
  props: ["value", "etiqueta", "estilos", "tipo_subcampo"],
  data() {
    return {
      Tipo_Campo: "EntradaArea",
      Datos_Form: this.value || []
    };
  },
  methods: {
    Propiedades(caso, indice) {
      if (caso === 0) {
        return "Digita el elemento " + indice;
      } else {
        return "Nombre " + indice;
      }
    },
    Eliminar_Elemento(indice) {
      this.value.splice(indice, 1);
      this.Datos_Form = this.value;
      this.$emit("input", this.value);
    },
    updateForm(valor, indice) {
      this.value.splice(indice, 1, valor);
      this.Datos_Form = this.value;
      this.$emit("input", this.value);
    },
    Agregar_Elemento() {
      if (this.value === undefined) {
        this.value = [""];
        console.log("ENTRO");
      }
      this.Datos_Form = this.value;
      var indice = this.value.length;
      //Cada entrada debe ser requerida
      if (indice === 0 || (indice > 0 && this.value[indice - 1] != "")) {
        this.value.splice(indice, 0, "");
        this.Datos_Form = this.value;
      }
    }
  }
};
</script>
