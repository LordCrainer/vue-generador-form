<template> 
  <v-app >
        <v-container id="txtContent" grid-list-xs v-for="(item, index) in items" :key="index">
          <v-layout row wrap>
            <v-flex xs2 sm2 lg2 xl2 v-for="i in item.Cantidad" :key="i">
              <v-card>
                <v-card-title >
                    <h3 class="headline mb-0">{{item.Nombre}}</h3>
                </v-card-title>
                <v-card-text>
                  <div class="text-xs-right">{{i}}</div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
  </v-app>
</template>


<script>
// All units are in the set measurement for the document
// This can be changed to "pt" (points), "mm" (Default), "cm", "in"
export default {
  name: "pdf",
  data() {
    return {
      items: [
        {
          Nombre: "SANDUCHE",
          Cantidad: 100
        },
        {
          Nombre: "Agua",
          Cantidad: 96
        },
        {
          Nombre: "VINO",
          Cantidad: 180
        },
        {
          Nombre: "COLA",
          Cantidad: 96
        }
      ]
    };
  }
};
</script>
