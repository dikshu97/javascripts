//promise chainning with fat arrow functon

let mypromise=new Promise(function(resolve,reject){
    // resolve('mere bete navit chips hai');
    reject("mere bete navit chiips ni hai");
})
mypromise.then( data=>{console.log(data)}).catch(Error=>{console.log(Error)})



