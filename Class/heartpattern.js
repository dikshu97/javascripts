let nst=11;
let nsp=4;
for(let row=1;row<=19;row++){
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
    }
    for(let st=1;st<=nst;st++){
        
        process.stdout.write("* ");
    }
    console.log();
    if(row<5){
        nst=nst+1;
        nsp=nsp-1;
    } else{
        nst=nst-1;
        nsp=nsp+1;
    }
}