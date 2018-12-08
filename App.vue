<template>
  <v-app>
  <Header></Header>

  <v-content>
    <Carusel></Carusel>
    <!-- <subtab></subtab>-->
  </v-content>

  <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./componentes/header.vue";
import Footer from "./componentes/footer.vue";
import Carusel from "./componentes/inicio/carusel.vue";
//import datePicker from "./componentes/date-picker.vue";
import subtab from "./componentes/subtab.vue";
export default {
  components: {
    Header,
    Footer,
    Carusel,
    subtab
  }
};
</script>
