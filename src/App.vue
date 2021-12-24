<template>
 <div>
   
   <button v-on:click="say()">{{btnText}}</button>
 </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {

  apiKey: "AIzaSyBSDpUN3-xjPAinfw5lIxqMC_4h9pcth9w",

  authDomain: "vue-project-38265.firebaseapp.com",

  projectId: "vue-project-38265",

  storageBucket: "vue-project-38265.appspot.com",

  messagingSenderId: "190212779702",

  appId: "1:190212779702:web:88122be4395cbfdbc68017",

  measurementId: "G-NS75V1NTRX"

};



export default {
 name: "App",
  components: {
   
  },
  data() {
      return {
         btnText: 'login with google',
         disableBtn: false
      }
   },
  methods: {
    
    say: function () {

      if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
     var provider=new firebase.auth.GoogleAuthProvider();

     firebase.auth().signInWithPopup(provider);
     this.btnText="Logged in";

    }
  },
}
</script>


