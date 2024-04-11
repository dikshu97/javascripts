// let nsp=0;
// let nst=5;
// for(row=1;row<=5;row++){
//     for(sp=1;sp<=nsp;sp++){
//         process.stdout.write("")
//     }

//     for(st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }
//     console.log();

//     nst=nst-1;
//     msp=nsp+2;
// }
// for(row=1;row<=6;row++){
//     for(col=1;col<=6;col++){
//     if(row==1 || row==6 || col==1 || col==6 ){
//         process.stdout.write("* ");

//     } else{

//         process.stdout.write("  ");
//     }
         
        
           
        
//     }
//     console.log();
// }


let nsp=0;
let nst=5;
 
for(row=1;row<=5;row++){
    // for(col=1;col<=5;col++){
    //     if(row==1 || row==5 || col==1 || col==5  )
    // }
    for(st=1;st<=nst;st++){
        process.stdout.write("* ");  
    }
    for(sp=1;sp<=nsp;sp++){
        process.stdout.write("  ");
    }
    console.log();

nst=nst-1;
nsp=nsp+1;

}

