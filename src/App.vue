<template>
  <v-app>
    <v-app-bar app color="#1976D2" dark>
      <div class="d-flex" @click="goHome">
        <h1 class="title font-weight-light">
          <v-icon large left>mdi-duck</v-icon><b>Duck</b>Forms
        </h1>
      </div>
      <v-spacer></v-spacer>
      <div v-if="user">
        <v-btn text class="btn" @click="goAdmin">Главная</v-btn>
        <v-btn text class="btn" @click="goMyForms">Мои формы</v-btn>
      </div>
      <v-spacer></v-spacer>
      <div v-if="user">
        <Menu :user="userEmail" @signOut="signOut"/>
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
  import Menu from '@/components/Menu.vue' 
  export default {
    name: 'App',
    components:{
      Menu
    },
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
      },
      goAdmin() {
        this.$router.push({ name: 'Admin' });
      },
      goMyForms() {
        this.$router.push({ name: 'MyForms' });
      },
      signOut(){
        auth.signOut();
        this.user = null;
        this.goHome();
      }
    }
  };
</script>

<style scoped>
.btn {
  margin: 0px 10px;
}
</style>