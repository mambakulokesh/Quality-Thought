var promiseObj = new Promise(function(resolve, reject){

} )

var promiseObj1 = new Promise(function(resolve, reject){
    resolve(100);
})

var promiseObj2 = new Promise(function(resolve, reject){
    reject(100);
})

console.log(promiseObj); //! status is pending 

console.log(promiseObj1); //! status is resolve or fullfiled state

console.log(promiseObj2); //! status is error or reject state


// promiseObj1.then(function(successdata){
//     console.log("Success"); 
//     console.log(successdata + 100); 
// },
// function(errordata){
//     console.log("Error");
// })

promiseObj2.then(function(successdata){
    console.log("Success"); 
    console.log(successdata + 100); 
},
function(errordata){
    console.log("Error");
    console.log(errordata - 100);
})







