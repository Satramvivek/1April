function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log(result);

const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 2));

function processUser(name, callback) {
  console.log("Processing " + name);
  callback();
}

function done() {
  console.log("Done!");
}

processUser("Vivek", done);