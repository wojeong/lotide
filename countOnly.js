const countOnly = function(allItems, itemsToCount){
  const results = {};
  for(const item of allItems){
    for(const name in itemsToCount){
      if(item === name && itemsToCount[name]){
        if(!results[name])
          results[name] = 0;
        results[name]++;  
      }
    }
  }
  return results;
}
module.exports = countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);
