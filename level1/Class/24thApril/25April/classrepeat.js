//doubt class,function constructor,new keyboard

//function comstructor and new keyword
function employee(fname,lname,age,salary,task) {
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.salary=salary;
    this.task=task;
}
let employee1=new employee("dikshu","negta",27,10000,function task() {console.log("teaching");});
console.log(employee1);
let employee2=new employee("jugal","pandey",22,5000,function task() {console.log("office boy");})
console.log(employee2);


