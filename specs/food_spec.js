var Food = require('../food');
var Hero = require('../hero');
var assert = require('assert');

describe('Food', function() {

  var food1;

  beforeEach(function() {
    food1 = new Food("Banana", 25);  
  });

  it('should have a name', function() {
    assert.equal("Banana", food1.name);
  });

})