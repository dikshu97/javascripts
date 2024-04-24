//primitive type -- deep copy

let num1=10;
let num2=num1;
console.log("before",num1,num2);
num1=num1+90;
console.log("after",num1,num2);

//non-primitive type --shallowcopy

let arr1=[10,20 ,30,40,50,60];
let arr2=arr1;
console.log("before",arr1,arr2);
arr1.pop();
arr1.push(100)
console.log("after",arr1,arr2);

let obj1={
    name:"Dikshu",
    age:27,
    salary:10000,
    address:"delhi"


}
let obj2=obj1;
console.log("before",obj1,obj2);
obj1.marks=78.90;
obj1.city="new delhi";
console.log("after",obj1,obj2);

//rest operator------shallow copy

function sum(...y) {
    console.log(y);
    let ans=0;
    for(let i=0;i<=y.length;i++){
        ans=ans+y[i]
    }
    return ans;
}
let ans=sum(10,20,30,40,50,60);
console.log(ans);


function multi(...yy) {
    console.log(yy);
    let ans=0;
    
}



//spread operator-------deep copy
let ayy=[10,20,30,40,50,60]
let ayy1=[...ayy]
console.log("before",ayy,ayy1);
ayy.push(100)
console.log("after",ayy,ayy1);

//question--2;
let azz=[1,2,3,4,5,6,7,8,9,10]
let azz2=[...azz]
console.log("before",azz,azz2);
azz.push(1000)
console.log("after",azz,azz2);


//for in loop----for rest operattor;
function exapmple(...y) {
    console.log(y);
    let ans1=0;
    for (const value of y) {
      ans=ans+value

        
    }
    return ans1;
}
let ans1=exapmple(1,2,3,4,5,6,7,8,9);
console.log(ans1);







































