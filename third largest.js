function thirdlargest(arr){
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
   var for ( var j=0;j<arr.length;j++){
    if (arr[j].length=index){
      var arr1.push(arr[j]);
    }
   }
  
    if (count<2){
    arr=arr-arr1;
    }
    count++;
   
  }
return(max);
}
console.log(thirdlargest(['wenjie','mike', 'joe', 'ww','c']));