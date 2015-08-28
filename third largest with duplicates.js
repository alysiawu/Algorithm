??????function thirdlargest(arr){
  var count =0;
  var max;
  while (count<3){
                    max=arr[0];
                    for (var i =0; i< arr.length;i++){ 
                      if (max.length<arr[i].length){
                        max=arr[i];    
                      }
                    }
  
   var index=arr.indexOf(max);
  
    if (count<2){
    arr.splice(index, 1);
    }
    count++;
   
  }
return(max);
}
console.log(thirdlargest(['wenjie','mike', 'joe', 'ww','c']));