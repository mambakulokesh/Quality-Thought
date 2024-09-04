var data = {
    id:5000,
    name:"krishna",
    address : {
        city : "Lucknow",
        country : {
            state1 : "MP",
            state2 : "TS",
            state3 : "AP",
            state4 : "MH",
        }
    }
};


data.address.city = "Hyd";


data.address.country.state4 = "UP";

console.log(data);

