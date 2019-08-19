


function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    this.printStats = function() {
        console.log(this.name);
        console.log(this.profession);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.hitpoints);
    }

    this.isAlive = function() {
        if(this.hitpoints <= 0) {
            return false;
        }
        else {
            return true;
        }
    }

    this.attack = function(character) {
        character.hitpoints -= this.strength;
    }

    this.levelUp = function() {
        this.age++;
        this.strength += 5;
        this.hitpoints += 25;
    }
}

var char1 = new Character("Character 1", "Thug", "male", 32, 10, 100);
var char2 = new Character("Character 2", "Project Manager", "female", 32, 10, 100);

char2.printStats();

while(char1.isAlive() && char2.isAlive()) {
    char1.attack(char2);
    char2.printStats();
    char2.attack(char1);
    char1.printStats();
}