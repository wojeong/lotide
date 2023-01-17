const middle = require('../middle');
const assertArraysEqual =  require('../assertArraysEqual');

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
console.log(assertArraysEqual(middle([6, 2, 1, 3, 5]), [1])) // => [1]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])) // => [3, 4]

const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns [2, 3] for 1, 2, 3, 4]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), true);
  });
  it("returns [1] for [6, 2, 1, 3, 5]", () => {
    assert.strictEqual(assertArraysEqual(middle([6, 2, 1, 3, 5]), [1]), true); 
  });
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]),[3, 4]), [1], false); 
  });
});