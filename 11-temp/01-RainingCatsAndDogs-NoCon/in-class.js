var dogs = {
	raining: true,
	noise: "woof!",
	makeNoise: function() {
		if(this.raining === true) {
			console.log(this.noise);
		}
	}
};

var cats = {
	raining: false,
	noise: "meow!",
	makeNoise: function() {
		if(this.raining === true) {
			console.log(this.noise);
		}
	}
}

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

function massHysteria(dogs, cats) {
	if (cats.raining && dogs.raining) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
}

massHysteria(dogs, cats);
