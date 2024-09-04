// var arr = [10,20,30,40,50,20,70];
// arr.push(60);
// arr.unshift(5);
// arr.pop();
// arr.shift();

// console.log(arr);

// var narr = arr.slice(1,3);
// console.log(narr);

// let index = arr.indexOf(20);
// console.log(index);

// let lastIndex = arr.lastIndexOf(20);
// console.log(lastIndex);

// let newArr = arr.map(x => x * 2);
// console.log(newArr);


var data = [10,20,30,40,50]
data.forEach(function(element, index){
    console.log(element);
});

console.log();

var productData = [
    {pname: "Iphone", price: 100},
    {pname: "MI", price: 200},
    {pname: "Oppo", price: 300},
    {pname: "realme", price: 400},
];

productData.forEach(function(prices){
    dis_prices = prices.price * 20/100;
    console.log(dis_prices);
});


var arr = [[{name: "s1"}],[{name : "s2"}], [{name: "s3"}]];

arr.forEach(function(element){
        console.log(element[0].name);
    });

var data1 = [12,2,33,4,5,56,76,8];
data1.splice(2,2);
data1.splice(3, 0, "bsdkj");
console.log(data1);


var data2 = [10,30,20,60,40,50]
data2.map(n => {
    console.log(n + 100);
    // return n%2 === 0
})

data2.filter(n => {
    console.log(n > 20);
})

var a = [10,20,30,40,50]
var b = a.includes(10)
console.log(b);