function createPromise(){
    return new Promise(function(resolve, reject){
        reject("lokesh");
    })
}

async function fn(){
    var res = await createPromise();
    console.log(res);
}

fn(); //! Error because of reject data