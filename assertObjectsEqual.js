const eqArrays = function (arr1, arr2){
  if(arr1.length !== arr2.length)
    return false;
  
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (!object2[key]) return false;
    if (!eqArrays(object1[key], object2[key])) return false;
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!

  const inspect = require('util').inspect; // <= add this line
  // ...
  console.log(`Example label: ${inspect(actual)}`);
};

module.exports = assertObjectsEqual;

