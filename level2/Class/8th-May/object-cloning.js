//q==2 =>object cloning 
//1st method---spread operator



let object1={
    naam:"dikshu",
    akhirinaam:"negta",
    umar:27,

}
let object2={...object1};
console.log("before",object1,object2);
object2.sex='male';
console.log("after",object1,object2);


//2nd method -- traverse
let object3={
    myname:"Dikshit",
    mylastname:"Negta",
    myage:27,

}
let object4={}
for(const key in object3){
object4[key]=object3[key]
}
console.log("before",object3,object4);
object3.mygender='female';
console.log("after",object3,object4);





