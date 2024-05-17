//topics to be covered=>

//callbacks
//callback hell
//promise
//promise chainning
//inversion of control



//for each loop on array
let arr=[10,20,30,40,50]
arr.forEach(function(maal){
    console.log(maal);
})



function testting (age,name){
console.log(age,name);
}
testing(22,'dikshu');


function testing (callback){
    callback();

}

testing(function(){
    console.log('iam a callback function');
})

