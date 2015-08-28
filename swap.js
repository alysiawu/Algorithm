
function swap(input){
  
  var output= {};
  for (var key in input){
   for (var j=0; j<input[key].length; j++){
      
      output[input[key][j]]=key;
           
    }
    
  }
  
  return output;
}

console.log(swap({ 
a : ['b', 'c'],
d : ['e', 'f']
})); 

// function invertHash(has)