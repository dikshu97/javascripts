//last digit-
console.log("last digit");
let num=7895;
while (num>0) {
    let ld=num%10;
    console.log(ld);
    num=Math.floor(num/10);
}


//number of digits;
console.log("number of digits");
let num1=78654;
let nod=0;
while (num1>0) {
 num1=Math.floor(num1/10);
nod++;
}
console.log("number of digits are:",nod);

//front digit
console.log("front digits");


let num2=675440;
let temp=num2;
let nod1=0;
while (temp>0) {
 temp=Math.floor(temp/10);
 nod1++;   
}
console.log(nod1);

let div=Math.pow(10,nod1-1);

while (div!=0) {
  let fd=Math.floor(num2/div);
  console.log(fd);
  num2=num2%div;
  div=Math.floor(div/10);  
}

//Front digit 2;

sum=788660;
nodd=0;
tempp=sum;
while (tempp>0) {
 tempp=Math.floor(tempp/10);
 nodd++;   
}
console.log("total number of didgits are",nodd);

let divv=Math.pow(10,nodd-1);

while (divv!=0) {
  let fd=Math.floor(sum/divv);
  console.log(fd);
  
  sum=sum%divv;
  divv=Math.floor(divv/10);

  
}