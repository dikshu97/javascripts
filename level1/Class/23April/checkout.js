let objj1={
    name:"Dikshu",
    age:27,
    address:"karol bagh",
    salary:10000  
}
let objj2={}
for(const key in objj1){
    objj1[key]=objj2[key];
}
console.log("before",objj1,objj2);
objj1.gender="male";
console.log("after",objj1,objj2);
