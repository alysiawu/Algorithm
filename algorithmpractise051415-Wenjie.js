// 1
for (var i = -1000; i < 2000; i++) {
	console.log(i);
}

// 2
for (var i = 10; i < 501; i += 2) {
	console.log(i);
}
// 3
for (var i = 3; i <30001; i += 3) {
	console.log(i);

}
// 4
for (var i = 0; i <  1000; i ++) {
	console.log(Math.floor(Math.random()*6)+5)
}
// 5
function reverse(arr){
	for (var i = 0; i < arr.length/2; i ++) {
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	};
    return arr;
}
console.log(reverse([6, 7, 8, 2, 3]));

// 6
function replacepo(arr){
	for (var i = 0; i < arr.length; i ++) {
		if (arr[i] > 0){
			arr[i] = 0;
		}
	}
	return arr;
}
console.log(replacepo([1, 3, -3]))

// 7

function removepo(arr){
  for (var i = 0; i<arr.length;i++){
    if (arr[i] > 0){
     arr.splice(i, 1);
     i--;
    }
  }
  console.log(arr);
}
removepo([1, 3, -8, 9]);
// 8
function replaceneg(arr){
  for (var i = 0; i<arr.length;i++){
    if (arr[i]<0){
     arr[i] = 7;
    } 
  }
  console.log(arr);
}
replaceneg([1, -3, -5]);

// 9
function removeneg(arr){
  for (var i = 0; i<arr.length;i++){
    if (arr[i]<0){
     arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
}
removeneg([1, 3, -5]);
// 10
for (var i = 5; i <= 50000; i +=5 ) {
	console.log(i);
}
// 11
for (var i = 35; i <= 50000; i += 35 ) {
	console.log(i);
}
// or 11
for (var i = 5; i <= 50000; i ++ ) {
	if (i%5 == 0 && i%7 == 0){
		console.log(i);
	}
}

// 12
for (var i = 5; i <= 50000; i ++ ) {
	if (i%5 == 0 || i%7 == 0){
		console.log(i);
	}
}

// 13
function maxmin(arr){
	var max = arr[arr.length-1];
	var min = arr[0];
 for (var i = 0; i < arr.length; i++){
 	if (max < arr[i]) { max = arr[i];}
 	if (min > arr[i]) { min = arr[i];}
 }
console.log (max, min);
}
maxmin([1, 4, 6, 3, 5, 9]);

// 14
function sumave(arr){
  var sum =0;
  for (var i=0;i<arr.length;i++){
    sum+=arr[i];  
  }
  var ave=sum/arr.length;
  console.log(sum, ave);
}
sumave([1, 5, 8, 10]);
// 15
function bubblesort(arr){
  for (var i=arr.length; i>0;i){
    for (var j=0; j<i;j++){
      if (arr[j]>arr[j+1]){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;  
      }  
    }  
  }
  console.log(arr);
}
bubblesort([1, 7, 8, 3, 5]);