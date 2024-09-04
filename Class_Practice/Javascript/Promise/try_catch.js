function createPromise(){
    return new Promise(function(resolve, reject){
        resolve("lokesh");
        reject({
            name: "lokesh", 
            age: 25,
            occupation: "Software Engineer"
        })
    })
}

async function fn(){
    try{
        var res = await createPromise();
        console.log("try");
        console.log(res);
    }
    catch (error){
        console.log("catch block");
        console.log(error);
    }
}
fn();