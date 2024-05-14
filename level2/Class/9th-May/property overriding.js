//property overridding
class parent {
    firstname="Dikshit";
    lastname="Negta";
    age=27;
    sayhellotome(){
        return "hello"+ this.firstname;
    }
}

class child extends parent{
firstname="puneet"
}
let child1=new child();
console.log(child1.firstname);


