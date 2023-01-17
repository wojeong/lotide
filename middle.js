const middle = function(array){
  let result = [];
  let arrayStart;
  if (array.length % 2 === 0){
    arrayStart = array.length/2 - 1;
    result.push(array[arrayStart]);
    result.push(array[arrayStart + 1]);
  } else{
    arrayStart = Math.floor(array.length/2);
    result.push(array[arrayStart]);
  }

  return result;
}

module.exports = middle;
