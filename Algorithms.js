//1. print 1-225
for (var i = 0; i< 256; i++)
	{print i;}
//2. Odd numbers 
for (var i = 1; i< 1000; i = i + 2)
	{print i}


//3. Print sum=
var sum = 0; 
for (var = 1; i < 5000; i = i + 2)
	{sum = sum + i}
print sum;

//4. iterating through the array
var X = [1, 3, 5, 7 ,9, 13];
for (var i = 0; i < X.length; i ++ )
	{ print X[0]; 
	}
// 5. Find max
var Array = [-3, 3, 5 ,7];
var max = Array[0];
for (var i = 0; i < Array.length; i ++)
{ if (max > Array[i])
	{// do nothing
	}
	else {
		Max = Array [i];
	}
} 
Print max;
// 6. Find Average -> 2:56
var myArray = [1, 3, 5, 7, 20];
var ave;
var sum = 0;
for (var i = 0; i < myArray.length; i ++)
{
sum = sum + myArray[i]; 
ave = sum/(i+1);
}
print ave;
//7. Array with odd numbers ->2:12
var Y = [];
for (var i = 1; i < 256; i = i + 2);
{
	Y.push() = i;
}
//8. Greate than Y -> 2 :45
var count = 0;
function (myArray, num){
for (var i = 0; i < myArray.length; i ++ ){
  if (myArray[i]> num){
 count ++;

  } else {}
  
}
print num;
}
//9. Squre the values -> 1: 34
var myArr = [1, 5, 10, -2];
for (var i = 0; i < myArr.length; i ++){
myArr[i] = myArr[i]*myArr[i];

} 
print myArr;
//10. Eliminate Negative Numbers -> 2:08
var arr = [ 1, 5, 10, -2]; 
for (var i = 0; i < arr.length; i ++)
{
 if ( arr[i] < 0){
arr[i] = 0;
 }else {}

}
print arr;
// 11. Max, min, ave -> 6:46
var max = arr [0]; 
var min = arr [arr.(legnth-1)];
var ave;
var sum = 0;
var arr = [1, 5, 10, -2];
for ( var i = 0; i < arr.legnth; i++)
{ if (max < arr[i]) {
max = arr [i];
} else if (min > arr[i]){
	min = arr[i];
}
sum = sum + arr[i];

}
ave = sum / arr.length; 
print max, min, sum;
//12. shifting the values in the array->2:17
var arr = [1, 5, 10, 7, -2];
temp = arr [0];
for ( var i = 0; i < arr.length-1; i ++){
arr[i] = arr[i+1];
}
arr [arr.length-1]=temp;
print arr;
//13. Number to String ->1:42
var arr = [-1, -3, 2];
for ( var i = 0; i < arr.length; i ++)
{ if (arr[i]<0){
	arr[i] = "Dojo";
} else {}
}
print arr;


