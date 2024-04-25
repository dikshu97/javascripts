let nst=1;
let nsp=4;
for(let row=1;row<=10;row++){
    for(let sp=1;sp<=nsp;sp++){
         process.stdout.write(" ");
    }
    for(let st=1;st<=nst;st++){
        process.stdout.write("* ");

    }
    console.log();
    if (row<5) {
       nst=nst+1;
       nsp=nsp-1;
    }else{
        nst=nst-1;
        nsp=nsp+1;
    }
}

let num=26788;
let nod=0;
let temp=num;
while (temp>0) {
  temp=Math.floor(temp/10);
  nod++;  
}
console.log(nod);
let div=Math.pow(10,nod-1);
while(div>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div;
    div=Math.floor(div/10)
}