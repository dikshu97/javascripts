let nsp=2;
let nst=1

for (let row=1;row<=5;row++){
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
    }
    for(let st=1;st<=nst;st++){
        process.stdout.write("1  ")
    }
    console.log();
     
     if(row<3){
        nst=nst+2;
        nsp=nsp-1;
     }
     else{
        nst=nst-2;
        nsp=nsp+2;
     }
}
// let nsp=nsp+1;
// let nst=;
// for (let row=1;row=row<=5;row++){
//     for (let sp=1;sp<=nsp;nsp++){
//         Process.stdout.write(" ");
//     }
//     for (let st=1;st<=nst;nst++){
//         Process.stdout.write("");
//     }
//     console.log();
    
// }
for(let row =1;row<=5;row++){
    for(let col=1;col<=5;col++){
    if(row==1 ||row==5 || col==1 || col==5){
     process.stdout.write("*  ")
    }else{
        process.stdout.write("   ")
    }
    
    }
    console.log();
    process
}