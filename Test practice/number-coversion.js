function anyBaseToDecimal(num, base) {
    let ans = 0;
    let power = 1;
    while (num > 0) {
        let r = num % 10;
        ans =ans+ (r * power);
        power = power*10;
        num = Math.floor(num / 10);
    }
    return ans;
}

let ans = anyBaseToDecimal(675477,8);
console.log(ans);



function decimaltoanybase(num,base){
    let ans=0;
    let power=1;
    while(num>0){
        num=Math.floor(num/base);
    let r=num%base;
    ans=ans+(r*power);
    power=power*10;

    }

    return ans ;

}


let ans1= decimaltoanybase(51,2);
console.log(ans1);

class baap{
    firstname;
    lastname;
    age;
    constructor(fname,lname,age){
     this.firstname=fname;
     this.lastname=lname;
     this.age=age
    }
}
class beta extends baap{

}
let ansss= new beta('navit','negta',20);
console.log(ansss);
 