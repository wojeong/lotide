const without = function(source, itemsToRemove){
  for(let i = 0; i < source.length; i++){
    if(source[i] === itemsToRemove)
      source.splice(i,1);
  }
  console.log(source);
}

module.exports = without;