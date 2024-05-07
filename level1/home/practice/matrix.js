// let nst=1;
// let nsp=0;

// for(let row=1;row<=5;row++){

//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*");  
//     }

//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
        
//     } 
    
//     console.log();


//     nst=nst+1;
// }
// console.log();

// let nst=1;
// let nsp=4;

// for(let row=1;row<=5;row++){

//     for(let sp=1;sp<=nsp;sp++){

//         process.stdout.write(" ")
                   
//         }  

//     for(let st=1;st<=nst;st++){
//       process.stdout.write("*");  
//       }
        
    
     
//      console.log();

//    nst=nst+1;
//    nsp=nsp-1;
// }


// let nst=1;
// let nsp=4;

for(let row=1;row<=5;row++){
    for( let col=1;col<=5;col++){
        if(row==col ) {

        Process.stdout.write("*");
        }
        else{
            Process.stdout.write(" ");   
        }
    } 
    console.log();
    
}

