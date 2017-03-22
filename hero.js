var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.talk = function() {
    console.log(this);
    return "Hi my name is " + this.name;
  };
};

module.exports = Hero;
