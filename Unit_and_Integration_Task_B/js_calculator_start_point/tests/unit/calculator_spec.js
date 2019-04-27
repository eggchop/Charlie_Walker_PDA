var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers together', function() {
    calculator.previousTotal=1;
    calculator.add(4);
    const expected = 5;
    assert.equal(calculator.runningTotal, expected);
  })

  it('it can subtract two number', function(){
    calculator.previousTotal=7;
    calculator.subtract(3);
    const expected = 4;
    assert.equal(calculator.runningTotal, expected);
  })

  it('it can multiply two numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const expected = 15;
    assert.equal(calculator.runningTotal, expected);
  })

  it('it can divide one number by another', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const expected = 3;
    assert.equal(calculator.runningTotal, expected);
  })

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(6);
    calculator.numberClick(7);
    const expected = '67';
    assert.equal(calculator.runningTotal, expected);
  })

  it('it should be able to chain multiple operator clicks together', function() {
    calculator.numberClick(6);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.multiply(2);
    const expected = '24';
    assert.equal(calculator.runningTotal, expected)
  })

  it('it should be able to clear running total without affecting calculation', function() {
    calculator.numberClick(6);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.clearClick();
    calculator.numberClick(2)
    calculator.operatorClick('=')
    const expected = '8';
    assert.equal(calculator.runningTotal, expected);
  })

});
