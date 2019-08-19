// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  }

  var zoo = [];
  for (var i = 0; i < 10; i++) {
    zoo.push(new Animal(true, "woof " + i));
  }

  zoo.forEach(function(animalInZoo) {
    animalInZoo.makeNoise();
  });




  function Avatar(name, stats) {
      this.name = name;
      this.stats = stats;
  }

  function Stats(hp, strength) {
      this.hp = hp;
      this.strength = strength;
  }


  var avatar = new Avatar("name", new Stats(10, 10));

  console.log(avatar.stats.hp);