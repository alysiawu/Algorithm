function split(arr)
{var count = 0;
 var sum1=0;
 var sum2=0;
  for (var i=0;i<arr.length-1;i++){
    
    for (var j=0;j<i+1;j++){
      sum1+=arr[j];
    }
    for (var k=i+1;k<arr.length;k++){
      sum2+=arr[k];
      
      
    }
    if (sum1==sum2){
      count++;}
        
  }
  
  if (count===0){console.log("false");}
    else if (count===1){console.log("true");}
    else if(count >1){console.log(" very true");}
  
}