const without = function(source, itemsToRemove){
  for(let i = 0; i < source.length; i++){
    if(source[i] === itemsToRemove)
      source.splice(i,1);
  }
  console.log(source);
}

const assertEqual = function (actual, expected){
  if(actual === expected){
    console.log(true);
  }
  else
    console.log(false);
}

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

without([1,2,3], 1);