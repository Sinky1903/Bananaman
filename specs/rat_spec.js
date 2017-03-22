var Rat = require('../rat');
var Food = require('../food');
var Hero = require('../hero');
var assert = require('assert');

describe('Rat', function() {

  var food1;
  var rat1;

  beforeEach(function() {
    food1 = new Food("Banana", 25)
    rat1 = new Rat("Roland");  
  });

  it('should have a name', function() {
    assert.equal("Roland", rat1.name);
  });

  it('should decrease food healValue by 40', function() {
    rat1.infect(food1);
    assert.equal(-15, food1.healValue);
  });

})