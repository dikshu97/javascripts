//this keyword
//cse=1----object-=this=bind[current context]
let obj={
    name:"dikshu negta",
    age:28,
    salary:10000,
    address:"DELHI",
    fun:function() {
       console.log(this.age); 
       console.log(this.name); 
       console.log(this.salary); 
       console.log(this.address); 
    
    }
}
console.log(obj.fun());   //will give object in case of object binded into this in browser

//case=2----global m in access---window object
console.log(this);  //==>window object




function fun(params) {
    
    console.log(this);  
}
fun()    //if accessing this in es5 function ==>window object

//case=3==if accesing this in es6 function==>fat arrow function;

let fun1=()=>{
    console.log(this);
}
fun1();         //==> window object

//case=5 ==>method

let obj1={
    name:"dikshu negta",
    age:28,
    salary:10000,
    address:"DELHI",
    fun:function() {
       console.log(this) 
       
    
    }
}
obj.fun();       //==>parent object or element

//case=6 ==>object=>function-es6-Fat arrow-=>this;

let object={
    name:"dikshu negta",
    age:28,
    salary:10000,
    address:"DELHI",
    fun:()=>{
        console.log(this);
    }
}
object.fun();       //==>window object

//case=7 ==>spaecial case==>
let object1={
    name:"dikshu negta",
    age:28,
    salary:10000,
    address:"DELHI",
    fun:function parent() {
        let child=()=>{
            console.log(this)  
        }
       child();   
       
    
    }
}
object1.fun();      //==>parent object/element==>if parent is es5 function and child is es6 function;

//case=8 ==>spaecial case==>
let object2={
    name:"dikshu negta",
    age:28,
    salary:10000,
    address:"DELHI",
    fun:function parent() {
        function child(){
            console.log(this)  
        }
       child();   
       
    
    }
}
object2.fun();      //==>window object==>if parent and child are both es5 function

 
//case=9 ==>spaecial case==>when parent is fat arrow functon and child is es5 function
let object3={
    name:"dikshit negta",
    age:29,
    salary:10,
    address:"DELHI",
    fun:()=> {
        function gun(){
            console.log(this)  
        }
       gun() ;  
       
    
    }
}
object3.fun();      //==>window object/element==>when parent is fat arrow functon and child is es5 function

//case=10 ==>spaecial case==>when parent and child are both es6 fat arrow function
let object4={
    name:"dikshit negta",
    age:29,
    salary:10,
    address:"DELHI",
    fun:()=> {
        let gun=()=>{
            console.log(this)  
        }
       gun() ;  
       
    
    }
}
object4.fun();      //==>window object/element==>when parent and child are both fat arrow es6 function;


let arr=[10,20,30,40,50,60,70,80];
console.log(arr);
arr.slice(2);
console.log(arr);
