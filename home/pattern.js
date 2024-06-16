let nsp=1;
let nst=5;

for (let row = 1; row <=9; row++) {
for(let sp=1;sp<=nsp;sp++){
    process.stdout.write("  ");
}
for(let st=1;st<=nst;st++){
    process.stdout.write("   *");
}
console.log();
if (row<5) {
    nst=nst-1;
    nsp=nsp+1;
}
else{
    nst=nst+1;
    nsp=nsp-1;
}
    
}


let nsp1=4;
let nst1=1;
for(let row=1;row<=9;row++){
  for(let sp=1;sp<=nsp1;sp++){
    process.stdout.write(" ");
  }
  for(let st=1;st<=nst1;st++){
    process.stdout.write(" *");
  }
  console.log();
  if (row<5) {
    nst1=nst1+1;
    nsp1=nst1-1;
  
  }
  else{
    nst1=nst1-1;
    nsp1=nst1+1;
  }
}