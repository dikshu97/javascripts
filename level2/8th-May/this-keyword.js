 // surprise test
 //q4
 let object={
    firstname:'dikshu',
    lastname:'negta',
    age:26,
    fun:function(){
   console.log(this.firstname); 
   console.log(this.lastname);
   console.log(this.age);
    }
 }
 console.log(object.fun());


 //2
 
let obj1={
    name:"dikshu negta",
    age:28,
    salary:10000,
    address:"DELHI",
    fun:function() {
       console.log(this) 
       
    
    }
}
obj1.fun();  
//3
let object1={
    name:'dikshu',
    lastname:'negta',
    age:10000,
    salary:100000000000,
    fun:function hello() {
       console.log(this);
    }
}
console.log(obj1.fun());

//4
let object2={
     name:'dikshu',
     lastname:'negta',
     age:26,
     fun:function(){
        let place=function name() {
            console.log(this);
        }
        console.log(place);
     }

}
console.log(object2.fun());

//5
let object3={
    name:'dikshit',
    lastname:'negta',
    age:28,
    fun:function(){
      let child= () =>{
           console.log(this);
       }
       console.log(child);
    }
  
}
console.log(object3.fun());


