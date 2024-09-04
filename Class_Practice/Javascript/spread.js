var obj1 = {
    name: 'John',
    age: 30,
    city : "c1",
}

var obj3 = {
    nickname: "n1",
}

var obj2 = {
    ...obj1,
    email : "s1@gmail.com",
    state : "s1",
    ...obj3,
}

console.log(obj1);
console.log(obj2);