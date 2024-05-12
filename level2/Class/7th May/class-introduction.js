
//class ---blueprint and skeleton

class employee{
    firstname="vikas";
    lastname="chiudhary";
    age=27;
constructor(){
    console.log("ek bar chal gaya");
}
}
let  emp1=new employee();     
let emp2= new employee();
console.log(emp1);
console.log(emp2);
console.log(emp1==emp2);


//making the constructor dynamic
class employee1{
    firstname;
    lastname;
    age;
    task;
    constructor( fname,lname,age, task){
       this.firstname=fname;
       this.lastname=lname;
       this.age=age;
       this.task=task;
    }
}
let employee2=new employee1("dikshu","negta",27,function(){console.log("student");});
console.log(employee2);
let employee3=new employee1("Dikshit","Negta",28,function(){console.log("student");});
console.log(employee3);
console.log(employee2.age);
console.log(employee3.firstname);
console.log(employee2.lastname);
employee2.task();


class parent {
    firstname;
    lastname;
    age;
    task;
    constructor(fname,lname,age,task){
    this.firstname=fname;
 this.lastname=lname;
 this.age=age;
 this.task=task;
    }
}
let details=new parent('Dikshit','Negta',27,function(){console.log('parent');});
console.log(details);
let details1=new parent('Rajan','dhanta',23,function(){console.log('parent');})
console.log(details1);


class  human{
    legs;
    hands;
    eyes;
    constructor(l,h,e){
        this.legs=l;
        this.hands=h;
        this.eyes=e;
    }
   

}
let human1=new human(2,2,2);
console.log(human1);
let animal=new human(1,1,1);
console.log(animal);

console.log('--------------------------------------------------------------------------------------');


//extends keyword --- when we have to inherit properties of parent in child and default constructer is also inherited


class parent1{
    firstname;
    lastname;
    age;
    task;
    constructor(fname,lname,age,task){
      this.firstname=fname;
      this.lastname=lname;
      this.age=age;
      this.task=task;
    }
}
let ans=new parent1('Dikshit','negta',20,function(){console.log('father');})
console.log(ans);

class child extends parent1{

}
let ans1=new child('Navit','Negta',26,function(){console.log('child');})
console.log(ans1);

console.log('--------------------------------------------------------------------------------------------------');


