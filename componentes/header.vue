<template>
  <v-toolbar dark color="primary" app fixed height="48px">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title class="white--text">SUPROHOSTING </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <Navbar :menus="menu_page"></Navbar>
      <!-- <v-btn flat v-for="n in 5" :key="n">Link {{n}}</v-btn> -->
    </v-toolbar-items>
    <!-- <Navbar></Navbar> -->
    <v-menu bottom left class="hidden-md-and-up" offset-y>
      <v-btn icon slot="activator"> <v-icon>more_vert</v-icon> </v-btn>

      <List :items="menu_page"></List>
      <!--
        <v-list>
         <v-list-tile
         v-for="(menu, index) in menu_page"
           :key="index"
           @click="">
           <v-list-tile-title>{{menu}}</v-list-tile-title>
         </v-list-tile>
        </v-list>
      -->
    </v-menu>
  </v-toolbar>
</template>
<script>
import Navbar from "./navbar.vue";
import List from "./list.vue";
//import pdfvue from "./inicio/pdf.vue";
//import PDF from "jspdf";
export default {
  components: { Navbar, List },
  data() {
    return {
      tab: null,
      menu_page: ["PRINCIPAL", "HOSTING", "DOMINIOS", "FAQS", "NOSOTROS"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
