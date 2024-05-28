//super constructer for sending child data to parent

class parent{
    firstname;
    lastname;
    age;
    constructor( fname,lname,age){
       this.firstname=fname;
       this.lastname=lname;
       this.age=age
    }
}
class child extends parent{

}

let child1=new child('dikshu','negta',26);
console.log(child1);