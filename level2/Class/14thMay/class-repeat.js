//topics to be covvered =>>heere are all the topics covered in itn function and its area aaround

//callback
//promise
//promise chainning
//
let promise1=new Promise((resolve ,reject)=>{
resolve('ye lo chips');
reject();
})
console.log(promise1);
promise1.then(function(data){
    console.log('chips hai');
})