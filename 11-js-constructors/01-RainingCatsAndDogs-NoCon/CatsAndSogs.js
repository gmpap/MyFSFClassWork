
//Create a dogs object with 3 keys, raining, noise and makeNoise, which constains a fn
//that console logs to the screen noise, if raining is true
let dogs = {
    raining: true,
    noise: 'Woof!',
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};
//same for cats
let cats = {
    raining: false,
    noise: 'Meow!',
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};
//runs fn for makeNoise

dogs.makeNoise();
//changes raining for cats to true, then runs cat makeNoise
cats.raining = true;
cats.makeNoise();

//fn that takes in the dog and cat objects.
//If both dogs and cats raining is true, then console logs output
function massHysteria (dogs, cats) {
    if (dogs.raining  && cats.raining ) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
  //runs fn massHysteria
  massHysteria(dogs, cats);
  