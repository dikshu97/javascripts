
console.log("inverted left half pyramiid");

nsp=0;
nst=5;

for(let row=1;row<=5;row++){
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write("  ");
    }
    for(let st=1;st<=nst;st++){
        process.stdout.write("*");
    }
    console.log();

    nsp=nsp+1;
    nst=nst-1;
}

console.log("rhombus pattern");

nsp=0;
nst=4;
for(let row=1;row<=5;row++){
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write("  ");   
    }
    for(let sT=1;sT<=nst;sT++){
        process.stdout.write("* ");   
    }
    console.log();


    nsp=nsp+1;

}

console.log("inverted full pyramyid");

nsp=0;
nst=5;

for(let row=1;row<=5;row++){
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ");
    }
    for(let st=1;st<=nst;st++){
        process.stdout.write("* ");
    }
    console.log();
    nsp=nsp+1;
    nst=nst-1;
}

console.log("hollow suare pattern");

for(let row=1;row<=6;row++){
    for(let col=1;col<=6;col++){
        if(row==1  ||row==6  ||col==1  ||col==6){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ")
        }

        // process.stdout.write("* ")
        
    }
    console.log();
}


console.log("hollow inverted full pyramid tringle");



for(let row=1;row<=5;row++){
    for(let col=1;col<=9;col++){
      if(row+col==6 || 5+row==col+1 || row==5){
        process.stdout.write("*");
      }
      else {
        process.stdout.write(" ");
      }
      
    }  console.log();
}

console.log("hollow hourglass square pattern ");

for(let row=1;row<=7;row++){
    for(let col=1;col<=7;col++){
        if(row<=3 && row==col){
            process.stdout.write("* ");
        }  else if(row>=3 && row==col){
            process.stdout.write("* ");
        }
    }
    console.log();
}





