<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex" @click="goHome">
        <h1 class="title font-weight-light">
          <v-icon large left>mdi-duck</v-icon><b>Duck</b>Forms
        </h1>
      </div>
      <v-spacer></v-spacer>
      <div v-if="user">
        {{userEmail}}
      </div>
      <div v-else>
        <v-btn color="yellow" light elevation="0" large @click="goLogin">Попробовать</v-btn>
      </div>
    </v-app-bar>

    <v-main>
     <router-view/>
   </v-main>
 </v-app>
</template>

<script>
  import { auth } from './main';

  export default {
    name: 'App',
    data() {
      return {
        user: null,
        userEmail: ''
      }
    },
    created() {
      let vm = this;
      auth.onAuthStateChanged(function(user) {
       if (user) {
         vm.user = user;
         vm.userEmail = vm.user.email;
       }
     });
    },
    methods: {
      goHome() {
        this.$router.push({ name: 'Home' });
      },
      goLogin() {
        this.$router.push({ name: 'Login' });
      }
    }
  };
</script>

<style scoped>

</style>