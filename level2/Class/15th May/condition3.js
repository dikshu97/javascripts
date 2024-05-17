let  nayapromise=new Promise((resolve,reject)=>{
    reject("hello its rejected");
})
nayapromise.reject(error=>{console.log(error);})
.then(data=>console.log(data))
.then(data=>console.log(data));


// let nayapromise = new Promise((resolve, reject) => {
//     reject("hello its rejected");
//   });
  
//   nayapromise
//     .then(data => {
//       console.log(data); // will not be called because the promise is rejected
//     })
//     .catch(error => {
//       console.log(error); // will be called with "hello its rejected"
//       return "new data"; // can return a new value or Promise here
//     })
//     .then(data => {
//       console.log(data); // will be called with "new data" (or the value returned in previous .then)
//     });