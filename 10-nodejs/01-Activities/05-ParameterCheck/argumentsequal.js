//The purpose of this program is to take two input numbers and check if they are equal or not.
//
//To run this program type:
//
//node argumentsequal.js 1 1
//
//This take in all the command line arguments and puts them into a variable 'inputs'
let inputs = process.argv

//The sets the two variables for the inputs
let num1 = inputs[2];
let num2 = inputs[3];

//Sets the output varaible and checks if the two numbers are equal.  If so, returns true, else false
let output;
if(num1 == num2){
    output = true;

} else{
    output = false;
}
//sends the contents of output variable to the termianl
console.log(output);