// it works too
function recursion(n){
  if (n == 1) return 1;  
  else 
  	{
  result=n*recursion(n-1);
    }
  return result;
}
console.log (recursion(5));

// it works
function fact(n){
if (n==1) {return 1;}
else {
 return( n* fact(n-1));
}

}
console.log (fact(5));





function recursion(n){
  if (n == 1) return 1;  
  else 
  	{
  result=n+recursion(n-1);
    }
  return result;
}
console.log(recursion(5));



function divfive(n){

if (n==5) {console.log (5);}
else {
	console.log(divfive(n-5));
} 
}
console.log (divfive(100));


function divfive(n){

if (n==5) {console.log (5);}
else {
    console.log(n);
divfive(n-5);
 
} 
}
console.log (divfive(100));





function fact(n){
if (n=1) {return 1;}
else {
 n* fact(n-1);
}

}
console.log (fact(5));





