var Hero = require('../hero');
var food = require('../food');
var assert = require('assert');

describe('Hero', function() {

  var hero1;

  beforeEach(function() {
    hero1 = new Hero("Bananaman", 100, "banana");
  });

  it('should have a name', function() {
    assert.equal("Bananaman", hero1.name);
  });

  it('should have 100 health when starting', function() {
    assert.equal(100, hero1.health);
  });

  it('should have a favourite food', function() {
    assert.equal("banana", hero1.favFood);
  });

  it('should be able to talk and say its name', function() {
    assert.equal("Hi my name is Bananaman", hero1.talk());
  });

  

})