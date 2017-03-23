var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.talk = function() {
    // console.log(this);
    return "Hi my name is " + this.name;
  };
  this.eat = function(food, healValue) {
    console.log(this);
    if(food.name === favFood && food.healValue > 0) {
      this.health += (food.healValue * 1.5);
    }
    else
      this.health += food.healValue;
  };
};

module.exports = Hero;
