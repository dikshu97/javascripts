//question=1 

class object{
    firstname;
    lastname;
    age;
    constructor(fname,lname,age){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
    }
}
class obj extends object{

}
let object1=new obj('dikshu','negta',27);
console.log(object1.age);
let object2=new obj('dikshit','negta',28);
console.log(object2.firstname);

//question==2;
class objj{
    firstname;
    lastname;
    age;
    constructor(fname,lname,age){

    }
}
class objj1 extends objj{
   

    constructor(fname,lname,age){
        super();
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
    } 
}
let objj2= new objj('Dikshit','Negta',20);
console.log(objj2);
console.log(objj2.age);
