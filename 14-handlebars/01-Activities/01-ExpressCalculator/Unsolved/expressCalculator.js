// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
//app.get("/:operation/:num1(/d+)/:num2(/d+)", function(req, res) {
  app.get("/:operation/:num1/:num2", function(req, res) {
  console.log(req.params.operation);

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  //console.log(req.params.operation);
 //let operation = req.params.operation;
  
  let {operation, num1, num2} = req.params;
  console.log(operation, num1, num2);
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integer
  num1 = Number(num1);
  num2 = Number(num2);

  //return res.json(null);
  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
      result = num1 + num2;
    break;
  case "subtract":
    // Subtract logic
    result = num1 - num2;
    break;
  case "multiply":
    // Multiply
    result = num1 * num2;
    break;
  case "divide":
    // Divide
    result = num1 / num2;
    break;
  default:
    // Handle anything that isn't specified
    result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
