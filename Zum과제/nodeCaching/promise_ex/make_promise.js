const aa = new Promise((resolve, reject) =>{
    resolve("promise 123");    
});

aa.then((result)=>{
    console.log(result);
})


