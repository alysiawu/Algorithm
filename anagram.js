function anagram (string, prefix, arr){
	
var strlen = string,length;
if (!prefix){
prefix = " ";

}
if (!arr){
arr = [];

}



if streng.length= 0{
arr.push(prefix);


}

for (i = 0; i<strlen;i ++){
anngram(string.substring (0, i) + string.substring(i+1, strlen))
prefix + string[i], arr;


}
return arr;

}