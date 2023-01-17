const countLetters = function(str){
  let letterCounter = {};
  const lowerCase = str.toLowerCase(); 
  
  for(let letter of lowerCase){
    if(!letterCounter[letter])
      letterCounter[letter] = 0;
    letterCounter[letter]++;
  }
  return letterCounter;
}
module.exports = countLetters;