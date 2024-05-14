//class constructor  ==>normal wala


class baap{
    firstname;
    lastname;
    age;
    constructor(){
        this.firstname="dikshu";
        this.lastname='negta';
        this.age=30;

    }
}
let ans= new baap();
console.log(ans);
let ans1= new baap();
console.log(ans1);
let ans2= new baap();
console.log(ans2);



//class constructor with extends

class baap1{
    firstname;
    lastname;
    age;
    constructor(){
        this.firstname;
        this.lastname;
        this.age;

    }
}
class beta extends baap1{
constructor(fname,lname,age){
    this.firstname=fname;
    this.lastname=lname;
    this.age=age;
}
}
let baaap= new beta("Dikshu","Negta",30);
console.log(baaap);

// let object={
//     firstname:'dikshu',
//     lastname:'negta',
//     age:28,
//     constructor(fname,lname,age){
//         this.firstname=fname;
//         this.lastname=lname;
//         this.age=age;
//     } 
// }
// let object1=new object("Dikshu","Negta",27,)
// console.log(object1);
