//Array traversal
//fotr loop

let array=[10,20,30,40,50,60]

for(let idx=0;idx<=array.length;idx++){
  console.log(array[idx]);
}

//while loop
let array1=[10,20,30,40,50,60]
let idx=0;
while (idx<array.length) {
  console.log(array[idx]);
  idx++;
}

//do while loop
let array2=[10,20,30,40,50,60];
let idx1=0;
do{
  console.log(array2[idx1]);
  idx1++;
}while(idx1<array2.length);

//for of loop
let array3=[10,20,30,40,50,60,70];

for(const value of array3){
  console.log(value);
}

//for each loop
let array4=[10,20,30,40,50,60,70,80];
array4.forEach(function callback(value) {
  console.log(value);
})
