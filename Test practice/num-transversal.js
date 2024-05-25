let num=127907;
let nod=0;
let temp=num;
while (temp>0) {
    temp=Math.floor(temp/10);
    nod++;
}
console.log("number of digits are",nod);

let div=Math.pow(10,nod-1);
console.log(div);
while (div>0) {
  let fd=Math.floor(num/div);
console.log(fd);  
num=num%div;
div=Math.floor(div/10)

  
}


