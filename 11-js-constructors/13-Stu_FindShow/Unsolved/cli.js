var TV = require("./tv");
var inquirer = require("inquirer");
const tv = new TV();

// Write code here to parse command line arguments and store them into variables
//Step 1: Get search type...show or actor
//Step 2: Get search term 
console.log(tv.findShow());
inquirer.prompt([
    {
        type: "list",
        message: "What are you searching for?",
        choices: ['actor', 'show'],
        name: 'search'
    },
    {
        name: 'term',
        message: function (answers) {
            return `What ${answers.search} are you searching for?`;
        }
    }

//Step 3: print!
]).then(answers => {
  if (answers.search === 'show') {
    console.log("Searching for ")
  }

    console.log(answers);
})
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
// dependency for inquirer npm package
// Create a new TV object
// var tv = new TV();

// var search = process.argv[2];
// var term = process.argv.slice(3).join(" ");

// if (!search) {
//   search = "show";
// }

// if (!term) {
//   term = "Andy Griffith";
// }

// if (search === "show") {
//   console.log("Searching for TV Show");
//   tv.findShow(term);
// } else {
//   console.log("Searching for TV Actor");
// }
