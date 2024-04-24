
//question--1;--Linear search in array

function Linear(arr,target) {
  for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        return true;
    }
       
    
  } 
  return false;
}
let arr=[10,20,30,40,50,60,70];

let ans=Linear(arr,60);
console.log(ans);


//question--2---array max and min element and span

let arr1=[10,20,30,40,50,60,70,80,90,100];
let max=arr1[0];
let min=arr1[0];

for(let i=0;i<arr1.length;i++ ){
  if(arr1[0]>max){
    max=arr1[i];
  }
  if(arr1[0]<min){
    min=arr1[i];
  }
}
console.log(max,min);
let span=max-min;
console.log(span);



//question--3----array reverse
let arr2=[10,20,30,40,50,60,70,80,90,100];
let i=0;
let j=arr2.length-1;

while(i<j){
    let temp=arr2[1];
    arr2[i]=arr2[j];
    arr2[j]=temp;

    i++;
    j--;
}
console.log(arr2);
