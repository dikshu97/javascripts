//super keyword
class parent{
    firstname;
    lastname;
    myage;
    constructor(fname,lname,age){
        this.firstname=fname;
        this.lastname=lname;
        this.myage=age;
    }
}
class child extends parent{
    constructor(fname,lname,age){
        this.firstname=fname;
        this.lastname=lname;
        this.myage=age; 
    }
    prntAgeofParentclass(){
        console.log(super.age);
        return super.age;
    }
}
let ch1=new child('dikshu','negta',27);
console.log(ch1);