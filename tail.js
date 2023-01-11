const tail = function(arr){
  let tailArray = []
  if(arr.length === 0)
    return undefined;
  for(let i = 0; i < arr.length; i++)
    tailArray.push(arr[i]);
  return tailArray;
}