var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i ++) {
  var new_arr = [];
  for (var j = 0 ; j <= i; j ++){
    var rand = Math.floor(Math.random()*5); 
    if (new_arr.indexOf(arr[rand]) == -1){
    new_arr.push(arr[rand]); }   
  } 

}
console.log(new_arr);