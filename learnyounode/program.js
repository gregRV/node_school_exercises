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
// var module = require('./module.js');
// module(process.argv[2], process.argv[3], function(err, data) {
//   if (err) {
//     return err;
//   }
//   data.forEach(function(name) {
//     console.log(name);
//   });
// });

// 7.
// var http = require('http');
// http.get(process.argv[2], function(response){
//   // passes data as String instead of buffer
//   response.setEncoding('utf8');
//   // rather than using an anon fx, the data will be piped into 2nd arg
//   response.on('data', console.log);
//   response.on('error', console.error);
// });

// 8.
// MY SOLUTION (SHOULD WORK)
// var http = require('http');
// http.get(process.argv[2], function(response){
//   var result;
//   response.on('data', function(data){
//     result += data;
//   });
//   response.on('end', function(){
//     result = result.toString();
//     console.log(result.length);
//     console.log(result);
//   });
// });
// THEIR SOLUTION USING EXTRA DEPENDENCY
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

// 9.
// MY SOLUTION
// var http = require('http');
// var result = [];
// var current;

// var getHttp = function(){
//   http.get(process.argv[2 + i], function(response) {
//     response.on('data', function(data) {
//       current += data;
//     });

//     response.on('end', function() {
//       result.push(current.toString());
//       current = null;
//     });
//   });

//   if (result.length === 3) {
//     displayOrder();
//   }
// }

// // create helper function to print in order when all done
// var displayOrder = function() {
//   result.forEach(function(res){
//     console.log(res);
//   });
// };

// for (var i=0; i < 3; i++) {
//   getHttp(i);
// }

// THEIR SOLUTION
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

