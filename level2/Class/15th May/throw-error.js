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
  }).catch(error=>{
    console.log(error);
    throw new Error('customized new error');
    // return Error;
  }).catch(error=>{
    console.log(error);
    
    throw new Error('customized new error');
    // return Error;
  }).catch(error=>{
    console.log(error);
    
    throw new Error('customized new error');
    // return Error;
  }).catch(error=>{
    console.log(error);
    
    throw new Error('customized new error');
    // return Error;
  }).catch(error=>{
    console.log(error);
  })