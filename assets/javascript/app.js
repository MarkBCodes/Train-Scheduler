$(document).ready(function() {
  // Firebase Config
  var firebaseConfig = {
    apiKey: "AIzaSyDOKkrZpMm9BHFM_iJ9Q-cat6IhQQmV_B4",
    authDomain: "trainscheduler-2dceb.firebaseapp.com",
    databaseURL: "https://trainscheduler-2dceb.firebaseio.com",
    projectId: "trainscheduler-2dceb",
    storageBucket: "",
    messagingSenderId: "375834453294",
    appId: "1:375834453294:web:595c24b71229635a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
});
