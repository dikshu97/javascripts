//throw new error on reject===>>will catch all the all the reject if it is used 
//if not used==>reject will work only ine time unless you give as maany as reject


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
  