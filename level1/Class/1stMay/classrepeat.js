function testing(){
    console.log("helllo world");
}
let ans=new testing();
let ans1=new testing()
console.log(ans==ans1);

function employee(){
    this.fname="dikshu";
    this.lname="negta";
    this.age=28;
    this.salary=10000;
    this.task=function(){
       console.log("teaching"); 
    }

    
    let empl=new employee();
    let empl1=new employee();
    console.log(empl);
    console.log(empl1);
    console.log(empl==empl1);
}

//function constructor
function teaching(fname,lname,age,salary,task){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.salary=salary;
    this.task=task;

}
let data=new teaching("dikshu","negta",27,10000,function(){console.log("teacher");})
let data1=new teaching("dikshit","negta",28,1000000,function(){console.log("office boy");})
console.log(data);
console.log(data1);

//question==2;;
function Greetings () {
  this.name="dikshu";
  this.lname="negta";
  this.age=27;
  
  this.fun=function(){
    return this.name+" "+this.lname+" "+this.age
  }  
}
let g1=new Greetings();
console.log(g1.fun());


///new.target

function kucchbhi(){
  console.log(new.target);
}
let anss=kucchbhi;
console.log(anss);


//other examples
function testtest(){

}
let test1= new testtest;
console.log(test1);         //function constructor gives this by default

