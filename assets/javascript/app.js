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
  $("#addTrain").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#trainNameInput")
      .val()
      .trim();
    var trainDest = $("#destinationInput")
      .val()
      .trim();
    var firstTrain = $("#firstTrainInput")
      .val()
      .trim();
    var trainFreq = $("#freqInput")
      .val()
      .trim();

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

    //clear textboxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firstTrainInput").val("");
    $("#freqInput").val("");
  });

  //this creates an even to add trains into the database and add in the html when user inputs data
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().start;
    var trainFreq = childSnapshot.val().frequency;

    var trainFreq;
    var firstTime = 0; //entered on the entry form.

    //time conversion going back 1 year
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    //current time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    //and the difference between times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERECE IN TIME: " + diffTime);

    //time apart
    var tRemainder = diffTime % trainFreq;
    console.log(tRemainder);

    //time until train
    var tMinutesTillTrain = trainFreq - tRemainder;
    console.log("MINUTES UNTIL TRAIN: " + tMinutesTillTrain);

    //next train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));

    //add train data into the table
    $("#train-table, tbody").append(
      "<tr><td>" +
        trainName +
        "</td><td>" +
        trainDest +
        "</td><td>" +
        trainFreq +
        "</td><td>" +
        moment(nextTrain).format("HH:mm") +
        "</td><td>" +
        tMinutesTillTrain +
        "</td></tr>"
    );
  });
});
