<template>
  <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required>
  </v-text-field>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
