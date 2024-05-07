let object={
    firstname:"vikas",
    lastname:"chaoudhary",

}
console.log(object.firstname);
console.log(object.lastname);

let object1={
   name:{
    firstname:"vikas",
    lastname:"chaudhary",
   }

}
console.log(object1.name);
console.log(object1.name.firstname);
console.log(object1.name.lastname);
console.log("hello world");


//optional chainning incase of object


let object2={
    name1:{
     firstname:"vikas",
     lastname:"chaudhary",
    }
 
 }
 console.log(object2.name);
 console.log(object2.name?.firstname);        // (?)==>gives undefined value even if there is error
 console.log(object2.name?.lastname);     // (?)==>gives undefined value even if there is error
 console.log("hello world");


 //optional chainning incase of array

 
 let object3={
    name2:{
     firstname:"vikas",
     lastname:"chaudhary",
    },
    nums1:[10,20,30],
    fun1:function(){
        console.log("hello me");
        return "dice academy"
    }
 }
 console.log(object3.name);
 console.log(object3.name?.firstname);
 console.log(object3.name?.lastname);
 console.log(object3.nums?.[1]);   //in normal object it would have only question mark but in case of array and function it would be question mark and dot.
 console.log(object3.fun?.());      //in normal object it would have only question mark but in case of array and function it would be question mark and dot.
 console.log("hello duniya");
 