//method over loading
//condition==>  method over loading==>>signature(method name) should be same,arguements can be different;  

class parent{
    firstname="dikshu";
    lastname="negta";
    getfullname(){
        return this.firstname+" "+this.lastname;
    }
     Area(l,b){
        return l*b;

     }
     area(side){
        return side*side;
     }
}
let  p1=new parent();
console.log(p1);
console.log(p1.getfullname());
console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------');
console.log(p1.Area(10,20,));