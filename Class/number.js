let num=7965;
 
while(num>0){
    let ld=num%10;
    console.log(ld);
    num=Math.floor(num/10);
}



for(row=1;row<=9;row++){
    for (let col = 1; col <=9; col++){
       if(row==1 || row==9 || col==1 || col==9){
        process .stdout.write("*  ")  
       }
       else {
        process .stdout.write("   ")    
    }

    } 
    console.log();
   
        
    }
    console.log("hello");


