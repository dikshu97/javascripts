//question=1;
let fun=()=>{
    console.log(this);
}
fun();             //=>window object

//questin =2;
let object={
    name:"dikshu",
    age:26,
    address:"karol bagh",
    salary:10000,
    fun:()=>{
        console.log(this);
    }

}
object.fun();                  //===>>window object

//question=3;
let object1={
    name:"dikshu",
    age:26,
    address:"karol bagh",
    salary:10000,
    fun:()=>{
        function gun() {
            console.log(this);
        }
        gun();
    }

}
object1.fun();            //=>window object

//question=4;
let object2={
    name:"dikshu",
    age:26,
    address:"karol bagh",
    salary:10000,
    fun:function (){
        console.log(this);
        let gun=()=>{
            console.log(this);
        }
        gun();
    }

}
object2.fun();           //=>parent element



