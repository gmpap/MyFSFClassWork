// Initialize Firebase (YOUR OWN APP)
var firebaseConfig = {
  apiKey: "AIzaSyDw01Bs4lGBEgFfMs6j09wG0aT997ml1gI",
  authDomain: "trains-b04be.firebaseapp.com",
  databaseURL: "https://trains-b04be.firebaseio.com",
  projectId: "trains-b04be",
  storageBucket: "trains-b04be.appspot.com",
  messagingSenderId: "541634637782",
  appId: "1:541634637782:web:097880baca42a08c"
};


/* var firebaseConfig = {
  apiKey: "AIzaSyDZIIri9nS0WrUvA7nt4mEGjrSd1IkWw38",
  authDomain: "my-first-project-95a04.firebaseapp.com",
  databaseURL: "https://my-first-project-95a04.firebaseio.com",
  projectId: "my-first-project-95a04",
  storageBucket: "",
  messagingSenderId: "112766876061",
  appId: "1:112766876061:web:3fc179259e5b3292"
}; */
firebase.initializeApp(firebaseConfig);

// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
var database = firebase.database();


// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
database.ref().on("value", function (snapshot) {

  // We are now inside our .on function...

  // Console.log the "snapshot" value (a point-in-time representation of the database)
  // This "snapshot" allows the page to get the most current values in firebase.
  console.log(snapshot, snapshot.val());


  // Change the value of our clickCounter to match the value in the database
  var clickCounter = snapshot.val().clickCount
  // Console Log the value of the clickCounter
  console.log(clickCounter);
  // Change the HTML using jQuery to reflect the updated clickCounter value
  $("#click-value").text(clickCounter);


  // Then include Firebase error logging
}, function (errorObject) {

  console.log("Ooops, somthing went wrong", errorObject);
});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function () {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  };

  // Save new value to Firebase

  database.ref().set({
    clickCount: clickCounter
  });
  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function () {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
