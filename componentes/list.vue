<template>
  <v-list>
    <v-list-tile
    v-for="(menu, index) in items"
      :key="index"
      @click="">
      <v-list-tile-title>{{menu}}</v-list-tile-title>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      tab: null
    };
  }
};
</script>
