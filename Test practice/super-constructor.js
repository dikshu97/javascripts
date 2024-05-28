class father{
 firstname;
 middlename;
 lastname;
 age

 constructor(fname,mname,lname,age){
 this.firstname=fname;
 this.middlename=mname;
 this.lastname=lname;
 this.age=age
 }   
}

class son extends father{
    firstname;
    middlename;
    lastname;
    age;
    
    constructor(fname,mname,lname,age){
        super()
        this.firstname=fname;
        this.middlename=mname;
        this.lastname=lname;
        this.age=age;
    }
}
let ans=new father("dikshu","singh","negta",27)
console.log(ans);