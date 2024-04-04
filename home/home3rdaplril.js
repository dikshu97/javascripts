// console.log("example of logical operatives");

// let marks=88;
// if (marks>90){
//     console.log("excellent");}
//     else if(marks>75 && marks<90){   //true*true
//         console.log("very good");
//     }
//     else if (marks>60 && marks<75){ //true*false
//         console.log("goood");
//     }
//     else if(marks>45 && marks<60){ //true*false
//         console.log("fair");
//     }
//     else if(marks==40){ //false
//         console.log("just pass");
//     }
//     else {
//         console.log("failcome to dice");
//     }



  // let num=786;
  // while(num>0){
  //   let ld=num % 10;
  //   console.log(ld);
  //   num=math.floor(num/10);

  // }

  let num=786;
  nod=0;
  while (num>0) {
    num=math.floor(num/10)
    nod=nod+1
  }
  console.log(nod);