var Details = {
    name : "Lokesh",
    age : 25,
    city : "Nellore",
    country : "India",
    gender : "male"
};

console.log(Details);
console.log(Details.name);


// insert the data in Object

Details.mail = "lokesh@gmail.com";
console.log(Details);

// Update the data in objects

Details.city = "Hyderabad";
console.log(Details);


// Delete the data

delete Details.age
console.log(Details);


// nested Objects


var obj = {
    name : "Lokesh",
    gender : "male",
    address : {
        city : "Nellore",
        state : "AP"
    },
}

obj.address.city = "Hyderabad";
obj.address.state = "TS";
console.log(obj);