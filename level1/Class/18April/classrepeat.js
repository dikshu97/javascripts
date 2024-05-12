function myintro(x,y,z) {
  console.log(x);  
  console.log(y);  
  console.log(z);  
  for (let i= 1; i<=10; i++) {
    console.log("dikshu"+i);
    
  }
 
}
myintro();

//array---=>when we have to store data of multiple people 
console.log("Array");

let marks=[20,25,34,40,55,60,70,80,56];
console.log(marks[7]);
//typeoff and length operator
console.log(marks.length);
console.log(typeof marks);

let age=23;
console.log(typeof age);
let myname="dikshu";
console.log(typeof myname );

let arr=[10,15,20,25,30,40,true,false,null,undefined,[1,2,3,4,5]]
console.log(arr.length);
console.log(arr[10][1]);
console.log(arr[10].length);

//object----=>when we have to store the multiple data of one person 

let mydetails={
    name:"dikshu",
    address:"karol bagh",
    age:27,
    marks:[100,200,300],
    ismarried:false,
   fun:function(){
    console.log("iam a method")

}
}
  console.log(mydetails);
  console.log(mydetails.age);
  console.log(mydetails.name);
  console.log(mydetails.ismarried);
  console.log(mydetails.marks[1]);
  console.log(mydetails.length);
  console.log(typeof mydetails.fun);
  console.log(typeof mydetails.ismarried);
  console.log(typeof mydetails.marks);
  console.log(typeof mydetails.name);
  console.log(typeof mydetails.address);
  console.log(typeof mydetails.age);
  

  //deep shallow copy ----=>[primitive and non primitive]
  //primitive

  let num1=100;
  let num2=num1;
  console.log("before", num1,num2);
  num1=num1+100;
  num2=num2-56;
  console.log("after", num1,num2);

//non-primitive

let arr1=[10,20,30];
let arr2=arr1;
console.log("before",arr1,arr1);
arr1.pop();
console.log("after",arr1,arr1);

//one more exapmple of non-primitive type
let obj1={
  name:"dikshu negta",
  age:28,
}
let obj2=obj1;
console.log("before",obj1,obj2);
obj1.name="dikshit"
console.log("after",obj1,obj2);


//traversal 
console.log("traversal");
console.log();
console.log();
console.log();
//while loop
let arrr=[10,20,30,40,50,60,70,80,90]
let idx=0;
while (idx<arrr.length) {
  console.log(arrr[idx]);
  idx++;
}
console.log();
console.log();
console.log();

//for loop
let arrr1=[10,20,30,40,50,60,70,80,90]
for (let index = 0; index < arrr1.length; index++) {
  console.log(arrr1[index]);
  continue;
}

//do while loop
let arrr2=[10,20,30,40,50,60,70,80,90]
let idx1=0;
do{
  console.log(arr2[idx1]);
idx1++;
}while(idx1<arrr2.length);
console.log();
console.log();
//for of looop for array
console.log("for of loop for array");
console.log();
let arrr3=[10,20,30,40,50,60,70,80,90]
for(const value of arrr3){
  // if (value==40) {

  //   continue; 
  // }
  console.log(value);
}
console.log();
console.log();
//fort in loop for object
console.log("for in loop for object");
console.log();
let objj={
x:10,
y:30,
z:50,
a:10,
b:10,
}
for(const value1 in objj){
  console.log(value1,objj[value1]);
}
