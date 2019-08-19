// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}
Player.prototype.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffence: " + this.offense + "\nDefence: " + this.defense);
};

var count = 0;
var askQuestion = function() {
    // if statement to ensure that our questions are only asked five times
    if (count < 3) {
      // runs inquirer and asks the user a series of questions whose replies are
      // stored within the variable answers inside of the .then statement
      inquirer.prompt([
        {
          name: "name",
          message: "Players name?"
        }, {
          name: "position",
          message: "Players position?"
        }, {
          name: "offense",
          type: Number,
          message: "Players Offense?"
        }, {
          name: "defense",
          type: Number,
          message: "Players Defense?"
        }
      ]).then(function(answers) {
        // initializes the variable newProgrammer to be a programmer object which will take
        // in all of the user's answers to the questions above
        var newPlayer = new Player(
          answers.name,
          answers.position,
          answers.offense,
          answers.defense);
        // printInfo method is run to show that the newProgrammer object was successfully created and filled
        newPlayer.printInfo();
        // add one to count to increment our recursive loop by one
        count++;
        // run the askquestion function again so as to either end the loop or ask the questions again
        askQuestion();
      });
      //console.log('This will not wait for prompt');
      // else statement which prints "all questions asked" to the console
      // when the code has been run five times
    }
    else {
     console.log("All questions asked");
    }
  };
  
  // call askquestion to run our code
  askQuestion();

  
