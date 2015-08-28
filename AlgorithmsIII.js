//1. print 1-225
for (var i = 0; i< 256; i++)
	{console.log (i);}
//2. Odd numbers 
for (var i = 1; i< 1000; i +=2)
	{console.log (i);}


//3. Print sum=
var sum = 0; 
for (var i = 1; i < 5000; i = i + 2)
	{sum = sum + i;}
console.log (sum);

//4. iterating through the array


var X = [1, 3, 5, 7, 9, 13]; 
for (var i = 0; i < X.length; i++){
	console.log(X[i]);
}


// 5. Find max

var arr= [-3, 3, 5, 7]; 
var max= arr[0];
for (var i = 0; i< arr.length; i ++){if (max<arr[i]){
  max = arr[i];
}
}
console.log (max);
// 6. Find Average -> 2:56
var arr= [1,3,5,7,20]; 
var sum =0;
for (var i = 0; i< arr.length; i ++)
	{sum+= arr[i];}
var ave=sum/arr.length;                                   
console.log (ave);

//7. Array with odd numbers ->2:12
var Y= []; 
for (var i = 1; i< 256; i+=2){
  Y.push(i);}                             
console.log (Y);

//8. Greate than Y -> 2 :45
var count = 0;
function big(myArray, y){
for (var i = 0; i < myArray.length; i ++ ){
  if (myArray[i]> y){
 count ++;
  }   
}
console.log (num);
}
big();
//9. Squre the values -> 1: 34
function sqt(arr){
  for (var i=0;i<arr.length; i++){
    arr[i]=arr[i]*arr[i];
  }
 console.log(arr);
  
}
sqt([1, 2, 4]);
//10. Eliminate Negative Numbers -> 2:08
function pos(arr){
  for (var i=0;i<arr.length; i++){
if (arr[i]<0)
{arr[i]=0;}
  }
 console.log(arr);
  
}
pos([-1, 2, 4]);

// 11. Max, min, ave -> 6:46
function cal(arr){
  for (var i = 0, max=arr[arr.length-1], min = arr[0],sum =0; i<arr.length; i++){
   if (max< arr[i]){max=arr[i];} 
    if (min>arr[i]){min =arr[i];}
    sum+=arr[i];
    
  }
  var ave = sum/arr.length;
  console.log(max);
  console.log(min);
  console.log(ave);
}
cal([1, 2, 3, 5, 8]);

//12. shifting the values in the array->2:17
function shift(arr){
  var temp = arr[0];
  for (var i = 0; i < arr.length-1; i++){
    arr[i]=arr[i+1];
  }
  arr[arr.length-1]=temp;
 console.log(arr);
}
shift([1, 2, 3, 5]);

//13. Number to String ->1:42
function dojo(arr){
  for (var i =0; i< arr.length; i++){if (arr[i]<0){
    arr[i]= "dojo";
  }
  } 
   console.log (arr);  
}
dojo([-9, 1, 6]);


