//if using inqurier instal first in bash npn i inquiere

var inquirer = require("inquirer");

// Write code here to parse command line arguments and store them into variables
//Step 1: Get search type...show or actor
//Step 2: Get search term 

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
    console.log(answers);
})
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
// dependency for inquirer npm package
