import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database"

import bootstrap from '@/assets/css/bootstrap.min.css'
import baseCss from '@/assets/css/style.css'

Vue.config.productionTip = false



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_f6ExzCp_IfoFD3Mv-1af7GI57CrnERA",
  authDomain: "t-tw-like.firebaseapp.com",
  databaseURL: "https://t-tw-like-default-rtdb.firebaseio.com",
  projectId: "t-tw-like",
  storageBucket: "t-tw-like.appspot.com",
  messagingSenderId: "357432838981",
  appId: "1:357432838981:web:694752d87a613fa5c94c2c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  bootstrap,
  baseCss,
  router,
  render: h => h(App),
}).$mount('#app')
