//method-1
// function callback() {
//   console.log("hello node js");
// }

// const add = function (a, b, callback) {
//   var result = a + b;
//   console.log("result", result);
//   callback();
// };
// add(60, 40, callback);

// //method-2
// const add = function (a, b, callback) {
//   var res = a + b;
//   console.log("res", res);
//   callback();
// };
// add(10, 15, function () {
//   console.log("hello world");
// });

// //method-3
// const add = function (a, b, callback) {
//   var res = a + b;
//   console.log("res", res);
//   callback();
// };
// add(10, 12, () => console.log("hello node"));

//create a server...
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Node JS");
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is listening on port${port}`);
});

// app.listen(port, function () {
//   console.log(`server is listening on port${port}`);
// });
