const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});


//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(words)); // no need to capture the return value since we are not checking it
