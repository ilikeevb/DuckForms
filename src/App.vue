<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex" @click="goHome">
        <h1><b>Forms</b></h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
     <router-view/>
   </v-main>
 </v-app>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      goHome() {
        this.$router.push({ name: 'Home' });
      }
    }
  };
</script>

<style scoped>

</style>