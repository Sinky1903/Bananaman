var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var assert = require('assert');

describe('Hero', function() {

  var food1;
  var food2;
  var rat1;
  var hero1;

  beforeEach(function() {
    food1 = new Food("Banana", 25);
    food2 = new Food("Apple", 10);
    rat1 = new Rat("Roland");
    hero1 = new Hero("Bananaman", 50, "Banana");
  });

  it('should have a name', function() {
    assert.equal("Bananaman", hero1.name);
  });

  it('should have 100 health when starting', function() {
    assert.equal(50, hero1.health);
  });

  it('should have a favourite food', function() {
    assert.equal("Banana", hero1.favFood);
  });

  it('should be able to talk and say its name', function() {
    assert.equal("Hi my name is Bananaman", hero1.talk());
  });

  it('should put health up by food healValue if favFood is eaten', function() {
    hero1.eat(food2);
    assert.equal(60, hero1.health);
  });

  it('should put health up by food healValue times 1.5 if favFood is eaten', function() {
    hero1.eat(food1);
    assert.equal(87.5, hero1.health);
  });

  it('should put health down if food has been infected', function() {
    rat1.infect(food1);
    assert.equal(-15, food1.healValue);
    hero1.eat(food1);
    assert.equal(35, hero1.health);
  })

})