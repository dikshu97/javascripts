let response=fetch("https://restcountries.com/v3.1/all");
// console.log(response);

// response.then(res=>{console.log(res.json());
// })
response.then(res=>{console.log(res);return res;
}).then(data=>{
    console.log(data.json());
  
}).catch(error=>{
    console.log(error);
}) 


async function getdatafromapi(){
    let response= await fetch("https://restcountries.com/v3.1/all");
    let finaldata=await response.json();
    console.log("hello world after response.json");
    console.log(finaldata);
    
}