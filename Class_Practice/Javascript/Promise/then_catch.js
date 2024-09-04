var promiseObj = new Promise(function(resolve, rejecet){
    // resolve({
    //     name: "John",
    //     age: 30
    // });

    rejecet({
        name: "John",   
        age: 30
    })
})

promiseObj.then(
    function(successdata){
        console.log("success");
        console.log(successdata)

    })
    .catch(function(errordata){
        console.log("catch");
        console.log(errordata);

    })