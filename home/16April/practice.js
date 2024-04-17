//normal example


function saymyname() {
  console.log("dikshit");  
  console.log("tannu");  
  console.log("golu");  
  console.log("parul");  
  console.log("saurav");  
  console.log("rajan");  
  console.log();
}
saymyname()
saymyname()
saymyname()
saymyname()
saymyname()

function add(number1,number2) {
  console.log(number1+number2);  
}
add(10,30);

//Es5=function statement ,function expression,function anonymous

//function statement 
console.log("function statement");

function sum(a,b) {
   console.log("dikshu");
   return a+b;
   
}
console.log(sum(10,20));
 
//function expression
console.log("function expression");

 let addition=function sum(a,b,c) {
    console.log("hello dikshit");
    return a+b+c;
}
console.log(addition(10,56,78));

//function anonymous

console.log("anonymous function");

let myfun=function my() {
    console.log("iam anonymous function");
}
myfun()


//ES6 functions

//FAT ARROW WITH FUNCTION
console.log("FAT ARROW FUNCTION");
console.log("syntax");

let fun=()=>{
console.log("dikshu");
}
fun();

//FAT ARROW WITH MULTIPLE PARAM
console.log("FAT ARROW WITH MULTIPLE PARAM");

let fun2=(name,surname,address,number,city)=>{
console.log("My name is",name,surname,"I live in ",address,"my phone number is ",number,"and my city is ",city);
}
console.log(fun2("dikshit","negta","karol-bagh",8800618248,"delhi"));

fun2("dikshit","negta","karol-bagh",8800618248,"delhi")

//FAT ARROW WITH SINGLE PARAM
console.log("FAT ARROW WITH SINGLE PARAM");



let fun4=(hehe)=>console.log("hello",hehe);
fun4("negta");

let fun5=(a,b,c)=>a+b-c;
let sum1=fun5;
console.log(sum1(5,6,9));



let xxx=(h,d,p,s)=>h+d+p/s;
let yyy=xxx;
console.log(yyy(5,8,4,9));