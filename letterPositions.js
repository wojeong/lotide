const letterPositions = function(sentence){
  const results = {};
  for(let index in sentence){
    if(!results[sentence[index]]){
      results[sentence[index]] = [];
    }
    results[sentence[index]].push(index) ;
  }
  return results;
}

console.log(letterPositions("lighthouse in the house?"));