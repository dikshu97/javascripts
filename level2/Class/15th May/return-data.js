//return transfers the data to other then

//inxase of resolve==>>>everyone will work

let merapromise=new Promise((resolve,reject)=>{
  resolve('daata resolved promise'); 
   
})
merapromise.then(data=>{
    console.log(data);
    return data;
}).then(data=>{
    console.log(data);
    return data;
}).then(data=>{
    console.log(data);
    return data;
}).then(data=>{
    console.log(data);
    return data;
}).then(data=>{
    console.log(data);
    return data;
}).then(data=>{
    console.log(data);
    return data;
})



//incase of reject====>only one will work


let merapromise1=new Promise((resolve,reject)=>{
    reject(' resolved not promise'); 
     
  })
  merapromise1.then(data=>{
      console.log(data);
      return data;
  }).then(data=>{
      console.log(data);
      return data;
  }).then(data=>{
      console.log(data);
      return data;
  }).catch(Error=>{
    console.log(Error);
    return Error;
  }).catch(Error=>{
    console.log(Error);
    return Error;
  }).catch(Error=>{
    console.log(Error);
    return Error;
  }).catch(Error=>{
    console.log(Error);
    return Error;
  }).catch(Error=>{
    console.log(Error);
  })