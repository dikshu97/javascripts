//q==2 =>object cloning 
//1st method---spread operator

let obj={
    name:"Dikshu",
    age:27,
    address:"karol bagh"
}
let obj2={...obj}
console.log("before",obj,obj2);

obj.gender="Male"
console.log("after",obj,obj2);


let obj={
name:'dikshu',
age:20,
address:'karol bagh',

}
let obj1={
    name:'dikshu',
    age:26,
    address:'delhi',

}
let