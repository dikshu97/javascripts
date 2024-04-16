let nsp=0;
let nst=7;

for(let row=1;row<=12;row++){
    // for(let col=1;col<=11;col++){
        
    
    // } console.log();

    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
    }
    for(let st=1;st<=nst;st++){
        process.stdout.write("* ")
    }
    console.log();
   
  
    if(row<7){
        nsp=nsp+1;
        nst=nst-1;
    }  else{
        nsp=nsp-1;
        nst=nst+1;
    }
}


let num=78656;
while(num>0){
    let ld=num%10;
    console.log(ld);
    num=Math.floor(num/10);
}
let numa=89765;
let nod=0;

while(numa>0){
numa=Math.floor(numa/10);
nod++;
}
console.log("numver 0f digits are:",nod);
