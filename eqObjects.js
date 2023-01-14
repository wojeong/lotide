const assertEqual = function (actual, expected){
  if(actual === expected){
    console.log(true);
  }
  else
    console.log(false);
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (!object2[key]) return false;
    if (!eqArrays(object1[key], object2[key])) return false;
  }

  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true