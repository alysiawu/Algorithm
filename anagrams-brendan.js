function getAnagrams(string, pre_fix, arr){
    // calculate the string.length every call
    var strlen = string.length;
  
    // check if there is a prefix, if not, create empty string
    if(!pre_fix){ 
      pre_fix = ""; 
    }
  
    // check if there is an arr, if not, create empty arr
    if(!arr){ 
      arr=[];
    }
  
    // base case, as we call 'getAnagrams', we'll shrink our strlen until zero.
    // at that point, we push into arr.
    if(strlen === 0) { 
      arr.push(pre_fix); 
    }
  
    // here's the meat.
    // we look through strlen
    // every time we call getAnagrams again, passing it modified inputs
    for(var i=0; i<strlen; i++){
        // .substring outputs all the characters in the string between the two arguements.
        // examples - substring(0, 1) will output the first letter of your string.
        //          substring(0, strlen) will output the whole string.
        //
        // also we add our string at index to prefix every time.
        // and then finally we pass arr
		getAnagrams(string.substring(0, i) + string.substring(i+1, strlen), pre_fix + string[i], arr);
	}
  
    // when these for loops complete, we start to return arr.
	return arr;
}
var input="dog";		
console.log(getAnagrams(input));