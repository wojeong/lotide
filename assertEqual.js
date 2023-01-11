// Function Implementation
const assertEqual = function (actual, expected){
  if(actual === expected){
    console.log(true);
  }
  else
    console.log(false);
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);