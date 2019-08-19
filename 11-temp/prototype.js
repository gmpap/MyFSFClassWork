


function Animal(name, noise) {
    this.name = name;
    this.noise = noise;

    this.makeNoise = function() {
        console.log(noise);
    }
}

function Animal2(name, noise) {
    this.name = name;
    this.noise = noise;
}

Animal2.prototype.makeNoise = function() {
    console.log(this.noise);
}

class Animal3 {
    constructor(name, noise) {
        this.name = name;
        this.noise = noise;
    }

    makeNoise() {
        console.log(this.noise);
    }
}

var dog = new Animal('dog', 'woof');
var cat = new Animal('cat', 'meow');

var dog2 = new Animal2('dog', 'woof');
var cat2 = new Animal2('cat', 'meow');

var dog3 = new Animal3('dog', 'woof');
var cat3 = new Animal3('cat', 'meow');