function scramble_anagram(theWord){
  //store the word in array

  var words = [];
  function anagram(str, prefix) {
 //single is the first and rest is the rest of characters
    var i, single, rest, word;
 
    //The first time round, prefix will be empty
    prefix = prefix || '';//Characters to prepend to the string
    //if (!prefx)
    // str to separate each single character
    for(i = 0; i < str.length; i++) {
      single = str[i];// str String to split
      rest = str.slice(0, i) + str.slice(i+1);
      //joining  the prefix with each of the combinations to store
      word = prefix + single + rest;
      //word only if it does not exist and base condition
      if(words.indexOf(word) < 0) 
        words.push(word);
      //recursilverly call it for combunation
      if(rest.length > 1) 
       anagram(rest, prefix + single);
  
    }
    
  }
  
  anagram(theWord);
  return words;
}
 
var scrambledWords = scramble_anagram('word');
console.log(scrambledWords);