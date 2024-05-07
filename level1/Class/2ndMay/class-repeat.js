//method to create array
//method=1;
let arr=[10,20,30,40,50,{a:10,b:20},function(){console.log("helo array");},true,false, undefined ,null];
let arr1=arr;
// console.log("before",arr,arr1);

//traverse
arr.forEach(function(maal){
    console.log(maal);
})
console.log("--------------------------________________-----------------");
//or
arr.forEach((maal)=>{
console.log(maal);
})
///method==2;
let arr2=new Array(10,20,30,40,50);
console.log(arr2);


//method==3;
let arr3=Array.of(10,20,30,40,50,60);
console.log(arr3);


//inbuilt methods
//isarray-true/false
console.log(Array.isArray);

//index of

console.log(arr3.indexOf(30));


//includes
console.log(arr3.includes(30));

// //find last index
// console.log(arr3.findlastindex(30));


//shift,unshift ,push and pop
let arr4=[10,20,30,40,50,60,70,80,90,100]
console.log(arr4);
arr4.pop();
console.log(arr4);

arr4.push(500);
console.log(arr4);

arr4.shift()
console.log(arr4);

arr4.unshift(20);
console.log(arr4);

//slice
let arr5=[10,20,30,40,50,60,70,80,90];
console.log(arr5);
let ans=arr5.slice(2,7);
console.log(ans);

//slice with negative numbers
let Array2=[100,200,300,400,500,600,700,800,900];
console.log(Array2);
Array2.slice(-6,-3);
console.log(Array2);       ///gives blank array

//splice
let arrr=[1,2,3,4,5,6,7,8,9,10];
console.log(arrr);
let ans1=arrr.splice(3,5);
console.log(ans1);


//map,filter and reduce
let








