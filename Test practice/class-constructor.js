class parent{
     firstname;
     lastname;
     age;
     constructor(fname,lname,age){
        this.firstname=fname
        this.lastname=lname
        this.age=age

     }
     
}

let parent1=new parent("dikshu","negta",27);
console.log(parent1)

class child extends parent{
    
    constructor(fname,lname,age){
        super();
        this.firstname=fname;
        this.lastname=lname;
        this.age=age
    }
}
let child1=new child();
console.log(child1);


function parent2(){
    let name="dikshu";
    function child(){
        console.log(name);
    }
    return child;
}
parent2();


