class parent{
    firstname;
    lastname;
    age;
    constructor(fname,lname,age){
this.firstname=fname;
this.lastname=lname;
this.age=age;
    }
}
let p1=new parent('Dikshu','Negta',27);
console.log(p1);
// console.log(p1.firstname);         ///public property==>>as it can b used outside object/classs
// console.log(p1.age);

class child extends parent{

}
let c1=new child('Navit','Negta',25);
console.log(c1);
console.log(c1.firstname);
console.log(c1.lastname);
console.log(c1.age);