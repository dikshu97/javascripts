// promise
//callback function resolved by promise

//syntax==>  
    let mypromise=new Promise((resolve,reject)=>{
    resolve('ye lo chips');
    // reject();
    })
    console.log(mypromise);

    //resolve=then function
    //reject=catch function

    mypromise.then(function(data){
        console.log(data);
    })


    ///incase of reject

    let mypromise1=new Promise(function(reject){
        reject("ye lo chips ni hai");
    })
    console.log(mypromise1);


    mypromise1.catch( function (error){
      console.log(error);
    })


    //or with fat arrow function==>>reslove
    let mypromise2=new Promise(function(resolve){
        resolve('ye lo chips mre bete navit')
    })
    console.log(mypromise2);
    mypromise2.then(data=>{console.log(data)})


    //promise with fat arrow function==>>reject

    let mypromise3= new Promise(function(reject){
        reject('mere bete navit chips ni hai')
    })

    mypromise3.catch(error=>{console.log(error)})
    
