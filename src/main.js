import Vue from 'vue'
import App from './App.vue'


import { initializeApp } from "firebase/app";
const firebaseConfig = {

  apiKey: "AIzaSyBSDpUN3-xjPAinfw5lIxqMC_4h9pcth9w",

  authDomain: "vue-project-38265.firebaseapp.com",

  projectId: "vue-project-38265",

  storageBucket: "vue-project-38265.appspot.com",

  messagingSenderId: "190212779702",

  appId: "1:190212779702:web:88122be4395cbfdbc68017",

  measurementId: "G-NS75V1NTRX"

};

const app = initializeApp(firebaseConfig);
console.log(app);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
