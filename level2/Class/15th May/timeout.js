let merapromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },2000)
})

let p=merapromise.then(()=>{
    console.log('test1');
})

console.log('.........',p);     //then and catch can also  promise in themselves.


let merapromise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },3000)
})

merapromise1.then(()=>{
    console.log('test2');
})


let merapromise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },4000)
})

merapromise2.then(()=>{
    console.log('test3');
})
let merapromise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },5000)
})

merapromise3.then(()=>{
    console.log('test4');
})
let merapromise4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },6000)
})

merapromise4.then(()=>{
    console.log('test5');
    console.log('promise ends here');
})

for(let i=1;i<=20;i++){
    for(let j=1;j<=5;j++){
        console.log('Dikshu '+i+j);
    }
    
}
