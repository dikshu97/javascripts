let mypromise=new Promise(function(resolve,reject){
    reject('promise rejected');
    resolve('promise resolved');
    
})
console.log(mypromise);
mypromise.then(data=>{console.log(data);}).catch(error=>{console.log(error);})