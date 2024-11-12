function f1() {
  console.log("f1 is called`");
}

function f2(f1callback) {
  console.log("f2 is called");
  f1callback();
}

function f3(f2callback) {
  console.log("f3 is called");
  f2callback(f1);
}

function f4(f3callback) {
  console.log("f4 is called");
  f3callback(f2);
}

function f5(f4callback) {
  console.log("f5 is called");
  f4callback(f3);
}

f5(f4);
