function x1(x2callback) {
  console.log("x1 is called");
  x2callback(x3);
}

function x2(x3callback) {
  console.log("x2 is called");
  x3callback(x4);
}

function x3(x4callback) {
  console.log("x3 is called");
  x4callback(x5);
}

function x4(x5callback) {
  console.log("x4 is called");
  x5callback(x6);
}

function x5(x6callback) {
  console.log("x5 is called");
  x6callback(x7)
}

function x6(x7callback) {
  console.log("x6 is called");
  x7callback();
}

function x7() {
  console.log("x7 is called");
}

x1(x2)
