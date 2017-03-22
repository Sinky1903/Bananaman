var Rat = function(name) {
  this.name = name;
  this.infect = function(food) {
    food.healValue -= 40;
  }
}

module.exports = Rat;