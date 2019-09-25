//Create a constructor fn that take is several parameters
function Programmer(name, position, age, favLanguage) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.favLanguage = favLanguage;

    //Creates a method called printstats, that prints all the parameters to the screen 
    this.printstats = function () {

        console.log(this.name);
        console.log(this.position);
        console.log(this.age);
        console.log(this.favLanguage);

    }
}

//Create new instance of a programer
    const dev1 =  new Programmer("Ankit", "Consultant", "99", "C++");
    const dev2 =  new Programmer("Semir", "Full Stack Developer", "26", "ECMA Script");
//this uses each new instance of a programmer and calls the printstats method to print
//the info for each programmer to the screen
dev1.printstats();
dev2.printstats();

    