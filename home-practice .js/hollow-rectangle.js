for (let row = 1; row <=4; row++) {
    for(let col=1;col<=7;col++){
        if (row==1 || row==4 || col==1 || col==7) {
            process.stdout.write(" *");
        }
        else{
            process.stdout.write("  ");
        }

    }
    console.log();
}

