<template>
   <v-tabs
          slot="extension"
          v-model="tab"
          color="transparent"
          
         
        >
        
          <v-tabs-slider color="black"></v-tabs-slider>
  
          <v-tab
            v-for="menu in menus"
            :key="menu"
          >
          {{menu}}
          </v-tab>
        </v-tabs>
</template>

<script>
export default {
  props: ["menus"],
  data() {
    return {
      tab: null
    };
  }
};
</script>
