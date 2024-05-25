for(let i=0;i<=10;i++){
    for(let j=0;j<=5;j++){
        console.log("hello"+i+j);
        continue; 
    }
    
}
console.log();



let nsp=5;
let nst=1;
for(let row=1;row<=6;row++){
    for(let st=1;st<=nst;st++){
        process.stdout.write("* ");
    }
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ");
      
    }
    console.log();
    nsp=nsp-1;
    nst=nst+1;
}



let nsp1=5;
let nst1=1;
for(let row=1;row<=6;row++){
    

    for(let col=1;col<=6;col++){

       if (row==6  || row==col ||col==1) {

        process.stdout.write("* ");
       } 
       else{
        process.stdout.write("  ");
       }
    }
    console.log();
}

let num=6878;
while (num>0) {
    let ld=num%10;
    console.log(ld);
    num=Math.floor(num/10);

}
console.log('---------------------------------------------------------------------------');



let num1=78654;
let nod=0;
while(num1>0){
  
  num1=Math.floor(num1/10);
  nod++;
}
console.log("no of digita are",nod);







