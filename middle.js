const middle = function(arr){
  let middleArray = [];
  if(arr.length < 3)
    return middleArray;
  
  for(let i = 1; i < arr.length - 1; i++)
    middleArray.push(arr[i]);
  
  return middleArray;
}
