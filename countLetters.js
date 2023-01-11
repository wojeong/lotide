const countLetters = function(str){
  let letterCounter = {'a'}; 
  
  for(let letter of str){
    if(!letterCounter[letter])
      letterCounter[letter] = 0;
    letterCounter++;
  }
  console.log(letterCounter);
}

console.log(countLetters("aaaaaa"));