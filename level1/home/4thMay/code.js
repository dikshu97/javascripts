let nst=1;
let nsp=4;

for(let row=1;row<=9;row++){
   for(let sp=1;sp<=nsp;sp++){
    process.stdout.write("  ");
   }
   for(let st=1;st<=nst;st++){
    process.stdout.write("*   ");
   }
   console.log();
   if(row<5){
    nsp=nsp-1;
    nst=nst+1;
   }
   else{
    nst=nst-1;
    nsp=nsp+1;
   }
}
function saymyname(a,b,c) {
    return a+b*c
}
let ans=saymyname(10,30,20)
console.log(ans);

