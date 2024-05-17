//callback hell

function testing (callback){
callback();
}
testing(()=>{
    console.log("test 1");
    testing(()=>{
        console.log("test2");
        testing(()=>{
            console.log("test3");
            testing(()=>{
                console.log("test4");
                testing(()=>{
                    console.log("test5");
                })
            })
        })
    })
})