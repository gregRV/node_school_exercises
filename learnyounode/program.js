// 1.
// console.log("HELLO WORLD");

// 2.
// var sum = process.argv.reduce(function(memo, current, idx) {
//   return idx > 1 ? (memo + +current) : memo;
// }, 0);
// console.log(sum);

// 3.
// var fs = require('fs');
// var file = fs.readFileSync(process.argv[2], 'utf8');
// console.log(file.split('\n').length - 1);

// 4.
// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function(err, data){
//   // console.log(data);
//   console.log(data.split('\n').length - 1);
// });

// 5.
// var fs = require('fs');
// fs.readdir(process.argv[2], function(err, data){
//   data.forEach(function(file){
//     var splitFile = file.split('.');
//     if (splitFile[1] === process.argv[3]) {
//       console.log(file);
//     }
//   });
// });

// 6.
var module = require('./module.js');
module(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    return err;
  }

  data.forEach(function(name) {
    console.log(name);
  });
});