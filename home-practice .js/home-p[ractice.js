// for(let i=0;i<=10;i++){
//     console.log('hello'+i);
// }


// let r=0;
// while (r<=9) {
//    console.log('hello'+r); 
//    i++;
// }


// let s=0;
// do{
//     console.log('hello'+s)
//     s++;
// }while(s<=9)

// let nst=1;
// let nsp=4;

//     for(let row=1;row<=9;row++){
//         for(let sp=1;sp<=nsp;sp++){
//             process.stdout.write("   ")
//         }
//         for(let st=1;st<=nst;st++){
//             process.stdout.write("  *")
//         }
//         console.log();
//         if (row<5) {
//             nst=nst+1;
//             nsp=nsp-1;   
//         }else{
//             nst=nst-1;
//             nsp=nsp+1;
//         }
        
//     }


// let num=6789;
// while (num>0) {
//   let ld = num%10;
//   console.log(ld);
//   num=Math.floor(num/10)  
// }

// let number =89765;
// let nod=0;
// while(number>0){
//     number=Math.floor(number/10);
//     nod++;
    
// }
// console.log('number of digits are:',nod);

let num=876755;
let nod=0;
let temp=num;
while (temp>0) {
   temp=Math.floor(temp/10);
   nod++; 
}
console.log("total number of diguts are:",nod);
let div=Math.pow(10,nod-1);
while (div>0) {
  let fd=Math.floor(num/div);
  console.log(fd);
  num=num%div;  
  div=Math.floor(div/10)
}


