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

//add function for trains
  $("#addTrain").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var trainDest = $("#destinationInput").val().trim();
    var firstTrain = $("#firstTrainInput").val().trim();
    var trainFreq = $("#freqInput").val().trim();

    //Creates temporary local object for holding data
    var newTrain = {
      name: trainName,
      destination: trainDest,
      start: firstTrain,
      frequency: trainFreq
    };

    //data upload to firebase
    database.ref().push(newTrain);

    alert("Train successfully added!"); //tells user input saved/added



});
