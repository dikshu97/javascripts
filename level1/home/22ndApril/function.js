//es6 function === fat arrow function

let sum=(a,b)=>{
    console.log("hello me");
    return a+b;
}
console.log(sum(6,7));

//es6 function===fat arrow with multi param

let summ=(yourname,surname,address,num,city)=>{
    console.log("myname is",yourname,surname,"my address is ",address,"my phone number is",num,"and i live in",city);
}
summ("Dikshu","Negta","Karol bagh",8800618248,"Delhi");
summ("Dikshu","Negta","Karol bagh",8800618248,"Delhi");

//es6 function===fat arrow with single param

let fun=(a,b,c,d)=>console.log("hello",a+b-c*d);
fun(4,5,6,3);


function myname() {
    console.log("hey iam still here");
}
myname()


for(const value in objj){
    console.log("hello",value,objj[value1]);
}