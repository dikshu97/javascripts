//example
console.log('Dikshu negta');

//muttable and unmuttable

let arr=[10,20,30,40,50];
arr[1]=10;
arr[4]=100;
console.log(arr);     ///muttable


let name="dikshu negta";
name[3]='g';
name[12]='h';
console.log(name);  //inmuttable
console.log('____________________________________________________________________________________________');


///inbuilt methods of string
//length
let name1='dikshit negta';
console.log(name1.length);

//chaeAt
console.log(name1.charAt(10));

//indexof
console.log(name1.indexOf('a'));

//starswith--true/false
console.log(name1.startsWith("dik"));

//endswith

console.log(name1.endsWith("p"));

//lastindexof
console.log(name1.lastIndexOf('a'));
console.log("______________________________________________________________");



//substring,substr,slice

//substring-2 params-2 index



console.log(name1.substring(2,9));
console.log(name1.substring(3));
console.log(name1.substring(9,2));
console.log(name1.substring(-4,-7));      //negative substring will give blank value


//substr---2 param --inclusive
console.log(name1.substr(2,12));
console.log(name1.substr(4));
console.log(name1.substr(5,name1.length-1-1));


//slice --------==>>>study from home
console.log('study from home');
console.log("_________________________________________________________________________________");

//split
let str="Dikshit Negta dice academy";
console.log(str.split(" "));

