// let nst=1;
// let nsp=0;

// for(let row=1;row<=5;row++){
//     //star
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     //newline
//     console.log();
//     //star update

//     nst=nst+1;
// }
// console.log("Harsh");

for(row=1;row<=5;row++){
    for(col=1;col<=5;col++){
        if(row==col){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    console.log();
}

// for(row=1;row<=5;row++){
//     for(col=1;col<=5;col++){
//         if(row+col==6){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }
