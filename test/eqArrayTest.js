const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1,2,3]), true);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(eqArrays(['5'],[5]), false); 
  });
});