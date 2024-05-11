//method overidding
class parent{
    name="Dikshit";
    surname="Negta";
    myage=27;
    getfullname(){
        return this.firstname+" "+this.lastname;
    }
    sayhello(){
        return "good morning"
    }

}

class child extends parent{
    sayhello(){
        return "good night sweet heart";
    }
}
let child1= new child ();
console.log(child1.sayhello());
