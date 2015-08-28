//1.(Random Array) Create an array X and fill the array with 10 values, 
//each value being a random integer between 0 to 100.  
//For example when your program is done, X could be something like this: 
//[35, 15, 3, 39, 53, 93, 25, 39, 59, 21].
var myArray= [];
for (var i = 0; i <10; i++){
	myArray.push(Math.floor(Math.random()*101));
}
console.log (myArray);

//2. (Swapping two values) Write a program that takes an array of numbers and 
//returns an array where the first and last numbers in the array have been switched.
//For example say x = [2, 3, 5, 7, 6]. By the end of the program x, 
//should be [6, 3, 5, 7, 2]. 
//Do this without creating an empty array.ew
function swap(arr){
var temp = arr[0];
arr[0]= arr[arr.length-1];
arr[arr.length-1] = temp;
console.log(arr);
}
swap([1, 2, 3, 4]);

//3. (Reversing) Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), 
//write a program that reverses the values in the array.  
//Once your program is done X should be in the reserved order.  
//Do this without creating a temporary array.  
//Also do NOT use the reverse method but find a way to reverse the values in the 
//array (HINT: swap the first value with the last; 
//second with the second to last and so forth).
function rever(arr){
	var temp = [];
for (var i = 0; i < arr.length/2; i++){
temp.push(arr[i]);
arr[i]= arr[arr.length-1-i];
arr[arr.length-1-i]=temp[i];
}
console.log(arr);
}
rever([1, 2, 3, 4]);
//4. (Insert X in Y) Write a program that inserts a new number X at an index Y. 
//For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your 
//program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). 
//Check the output of your array once your program is completed to make sure 
//it's working correctly.
function insert(arr, X, Y){
var temp = [];
for (var i = Y; i< arr.length; i ++ ){
	temp.push(arr[i]);
}
var temp2= [];
for (var j = 0; j < Y; j ++){
	temp2.push(arr[j]);
}
temp2.push(X);
for (var k= 0; k< temp.length; k++){
	temp2.push(temp[k]);
}
console.log(temp2);
}
insert([1, 2, 3, 4], 6, 3);
//5 
function positive(arr){
	var temp = [];
for (var i =0; i < arr.length; i ++){
if (arr[i]>=0){
temp.push(arr[i]);
}

}
console.log(temp);
}
positive([1, -9, 0, 3]);

