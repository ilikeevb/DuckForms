import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

import firebase from 'firebase';
import 'firebase/firestore';

import { firestorePlugin } from 'vuefire';
Vue.use(firestorePlugin);

const firebaseConfig = {
	apiKey: "you config",
	authDomain: "you config",
	databaseURL: "you config",
	projectId: "you config",
	storageBucket: "you config",
	messagingSenderId: "you config",
	appId: "you config"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
