
// //leftbottomtriangle

// let nst=1;
// let nsp=0;

//  for(let row=1;row<=6;row++){
 
//     for(st=1;st<=nst;st++){
//         process.stdout.write("*");
//     }
//     for(sp=1;sp<=nsp;sp++){
//         process.stdout.write(" "); 
//     }
//   console.log();
//   nst=nst+1;
//  }
 
 for(row=1;row<=6;row++){
    for(col=1;col<=6;col++){
  if(row==1 || row==6 || col==1 ||col==6)   {
   Process.stdout.write("*")
 }
 else{
    Process.stdout.write(" ")
 }
    } 
     console.log();
 }console.log();