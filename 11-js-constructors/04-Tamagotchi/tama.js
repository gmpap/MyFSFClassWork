function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function feed() {
        if (this.hungry === true) {
            console.log("That was yummy!")
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks! I'm full.")
        }
    }
    this.sleep = function sleep() {
        if (this.sleepy === true) {
            console.log("ZZZZZZZZ")
            this.sleepy = false;
            this.hungry = true;
            this.increaseAge();
        }
        else {
            console.log("No way! I'm not tired.")
        }

    }
    this.play = function play() {
        if (this.bored === true) {
            console.log("Yay! Let's play!")
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("Not right now. Later?")
        }
    }

    this.increaseAge = function () {
        this.age++;
        console.log()

    }
};



var DigiP = new DigitalPal(false, false, true, 0);
console.log(DigiP);
DigiP.feed();



var dog = new DigitalPal();

console.log(dog.hungry);
dog.hungry = false;
dog.bark = function () {
    console.log("wooof wooof")
}

dog.goOutside = function(){
    if (!this.outside) {
        console.log("ldfljsdlfjkdsjfldsjkfsjdlsj");
        this.outside = true;
        this.bark;

    }
    else {
        console.log("lfjljfldjdsj");
    }
}