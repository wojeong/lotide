const assertEqual = function (actual, expected){
  if(actual === expected){
    console.log(true);
  }
  else
    console.log(false);
};

const findKeyByValue = function(obj, str){
  for(let key in obj){
    if(obj[key] === str)
      return key;
  }
  return undefined;

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);