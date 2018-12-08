<style scoped>
.Array {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<template>

<div id="">
    <v-app id="inspire">
        <v-toolbar flat color="white">
            <v-toolbar-title>{{Table[0].Titulo}}</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px" style="z-index: 9999;" hide-overlay persistent>
                <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
                <v-card>
                    <v-card-title>
                        <span class="headline">address {{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <generadorForm
                        :model="model" 
                        :schema="schema.fields" 
                        :options="options"
                        >
                      </generadorForm>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm12 md12 v-for="(valor,index_crud) in Table[0].Cabecera" :key="index_crud" v-if="valor.tipo !='acciones'">
                                    <v-text-field required v-model="editedItem[valor.value]" :label="valor.text"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-toolbar>
        <v-card color="white">
            <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-breadcrumbs>
                <v-icon slot="divider">chevron_right</v-icon>

                <v-breadcrumbs-item>
                    HOME
                </v-breadcrumbs-item>
            </v-breadcrumbs>
        </v-card>
        <v-data-table :headers="Table[0].Cabecera" :items="desserts" :search="search" class="elevation-2">
            <template slot="items" slot-scope="props">
                <td v-for="(value,indice) in Table[0].Cabecera" v-if="value != '__ob__' && value.value!='acciones' " 
                      :class="'text-xs-'+Table[0].Cabecera[indice].align" 
                      :key="indice">
                    <div v-if="Table[0].Cabecera[indice].tipo == 'lista'" class="Array">
                        <div v-for="(valor,index_valor) in props.item[value.value]" :key="index_valor">
                            <v-chip :style="Color_Random()" outline color="blue darken-3">{{valor}}</v-chip>
                        </div>
                    </div>
                    <div v-if="Table[0].Cabecera[indice].tipo == 'boton'">
                        <v-btn outline color="success">VER</v-btn>
                    </div>
                    <div v-if="Table[0].Cabecera[indice].tipo == 'texto'">
                        {{props.item[value.value]}}
                    </div>
                </td>
                <td class="justify-center layout px-0">
                    <v-icon small class="mr-2" @click="editItem(props.item,desserts)">
                        edit
                    </v-icon>
                    <v-icon small @click="deleteItem(props.item,desserts)">
                        delete
                    </v-icon>
                </td>
            </template>
            <template slot="no-data">
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>      
    </v-app>
</div>

</template>

<script>
import Table from "../../models/tabla";
import generadorForm from "../Formularios/generadorForm.vue";
function RangeRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  components: { Table, generadorForm },
  //el: '#demo',

  data() {
    return {
      Table: Table,
      dialog: false,
      search: "",
      desserts: [],
      editedIndex: -1,
      model: {},
      schema: {
        Titulo: "FORMULARIOS",
        fields: [
          {
            type: "text",
            label: "Nombre",
            model: "name",
            counter: "15",
            placeholder: "Tu nombre",
            rules: "nameRules",
            featured: true,
            required: true
          },
          {
            type: "text",
            label: "Apellido",
            model: "apellido",
            counter: "15",
            placeholder: "Tu nombre",
            rules: "nameRules",
            featured: true,
            required: true
          }],
        
      },
      options: {},
      editedItem: {
        Nombre: "",
        Precio: 0,
        Fecha_init: 0,
        Categoria: 0
      },
      defaultItem: {
        Nombre: "",
        Precio: 0,
        Fecha_init: 0,
        Categoria: 0
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },

  methods: {
    Color_Random() {
      var max = RangeRandom(130, 200);
      var min = RangeRandom(0, 32);
      var Patron = [max, min, RangeRandom(min, max)];
      var lista = [0, 1, 2];
      var orden = [];
      for (var i = 0; i < Patron.length; i++) {
        var valor = RangeRandom(0, lista.length);
        orden[i] = lista[valor];
        lista.splice(valor, 1);
      }
      //orden.push(lista[0])
      //console.log(rgb);
      var rgb =
        "rgb(" +
        Patron[orden[0]] +
        "," +
        Patron[orden[1]] +
        "," +
        Patron[orden[2]] +
        ")";
      return "background-color:" + rgb + ";";
    },
    initialize() {
      this.desserts = [
        {
          Nombre: "Frozen Yogurt",
          Precio: 159,
          Fecha_init: 6.0,
          Categoria: [
            "Machine Learning",
            "Sistemas Embebidos",
            "muy Comun",
            "Introducción a Python"
          ],
          protein: 4.0
        },
        {
          Nombre: "Ice cream sandwich",
          Precio: 237,
          Fecha_init: 9.0,
          Categoria: ["Machine Learning", "Sistemas Embebidos", "muy Comun"],
          protein: 4.3
        },
        {
          Nombre: "Eclair",
          Precio: 262,
          Fecha_init: 16.0,
          Categoria: ["Machine Learning", "Sistemas Embebidos", "muy Comun"],
          protein: 6.0
        },
        {
          Nombre: "Cupcake",
          Precio: 305,
          Fecha_init: 3.7,
          Categoria: ["AC", "BC"],
          protein: 4.3
        },
        {
          Nombre: "Gingerbread",
          Precio: 356,
          Fecha_init: 16.0,
          Categoria: ["AC", "BC"],
          protein: 3.9
        },
        {
          Nombre: "Jelly bean",
          Precio: 375,
          Fecha_init: 0.0,
          Categoria: ["AC", "BC"],
          protein: 0.0
        },
        {
          Nombre: "Lollipop",
          Precio: 392,
          Fecha_init: 0.2,
          Categoria: ["AC", "BC"],
          protein: 0
        },
        {
          Nombre: "Honeycomb",
          Precio: 408,
          Fecha_init: 3.2,
          Categoria: ["AC", "BC"],
          protein: 6.5
        },
        {
          Nombre: "Donut",
          Precio: 452,
          Fecha_init: 25.0,
          Categoria: ["AC", "BC"],
          protein: 4.9
        },
        {
          Nombre: "KitKat",
          Precio: 518,
          Fecha_init: 26.0,
          Categoria: ["AC", "BC"],
          protein: 7
        }
      ];
    },

    editItem(item,obj) {
      this.editedIndex = obj.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item,obj) {
      const index = obj.indexOf(item);
      confirm("Are you sure you want to delete this item?"+index) && obj.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save(obj) {
      if (this.editedIndex > -1) {
        Object.assign(obj[this.editedIndex], this.editedItem);
      } else {
        obj.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
