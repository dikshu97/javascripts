//object cloning 
//1st method---spread operator

let obj={
    name:"Dikshu",
    age:27,
    address:"karol bagh"
}
let obj2={...obj}
console.log("before",obj,obj2);
// console.log(obj.length);
obj.gender="Male"
console.log("after",obj,obj2);

//2nd method--- traverse;
let objj1={
    name:"Dikshu negta",
    age:288,
    address:"R.K.Puram",
    salary:10000000000 
}
let objj2={}
for(const key in objj1){
    objj2[key]=objj1[key];
}
console.log("before",objj1,objj2);
objj1.gender="male";
console.log("after",objj1,objj2);



//3rd method ---Object.assign

let object={
    name:"Dikshit negta",
    age:2883,
    address:"R.K.Puram",
    salary:10  
}
let object2={}
Object.assign(object2,object,{x:100,y:200});
console.log("before",object,object2);
object.gender="male";
object.state="delhi";
console.log("after",object,object2);

//example ---2
let ans={
    1:10,
    2:20,
    3:30,
    4:40,
    5:50,
    6:60,
}
let ans2={}
Object.assign(ans2,ans)
console.log(ans,ans2);
ans2.gender="Male"
console.log(ans,ans2);

//point to be noted--target=object,source=object,{x:100,y:200}=optional;


//4th method=Structure cloning
// let object1={
//     name:"Dikshit negta",
//     age:2883,
//     address:"R.K.Puram",
//     salary:1001010  
// }
// let newobj=structuredClone(object1);
// console.log("before",newobj,object);
// object1.gender="Male"
// console.log("after",newobj,object1);


// //5th method ---object assign cloning

// let Obj5={
//     name:"Dikshit negta",
//     age:2,
//     address:"delhi",
//     salary:1010 
// }
// let newobj2=Object.assign(Obj5);
// console.log(newobj2,Obj5);
// Obj5.gender="Male";
// console.log(newobj2,Obj5);
