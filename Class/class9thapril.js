let nsp=0;
let  nst=0;

for(let row=1;row<=11;row++){
    for(sp=1;sp<=nsp;nsp++){
        Process.stdout.write(" ")
    }
   for(st=1;st<=nst;nst++){
    
     Process.stdout.write("*")
    
   }console.log("*");
   if(row<6){
    nsp=nsp+1;
    nst=nst-1;
   }
   else{
    nsp=nsp-1;
    nst=nst+1;
   }
}