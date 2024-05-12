//super constructer for sending child data to parent

class parent{
    firstname;
    lastname;
    age;
    constructor( fname,lname,age){
       
    }
}
class child extends parent{
constructor(fname,lname,age){
    super();
  this.pehlanama=fname;
  this.akhirinam=lname;
  this.umar=age;
}
}
let child1=new child('dikshu','negta',26);
console.log(child1);