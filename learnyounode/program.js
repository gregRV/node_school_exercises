// 1. HELLO WORLD
// console.log("HELLO WORLD");

// 2. BABY STEPS
// var sum = process.argv.reduce(function(memo, current, idx) {
//   return idx > 1 ? (memo + +current) : memo;
// }, 0);
// console.log(sum);

// 3. MY FIRST I/0!
// var fs = require('fs');
// var file = fs.readFileSync(process.argv[2], 'utf8');
// console.log(file.split('\n').length - 1);

// 4. MY FIRST ASYNC I/0!
// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function(err, data){
//   // console.log(data);
//   console.log(data.split('\n').length - 1);
// });

// 5. FILTERED LS
// var fs = require('fs');
// fs.readdir(process.argv[2], function(err, data){
//   data.forEach(function(file){
//     var splitFile = file.split('.');
//     if (splitFile[1] === process.argv[3]) {
//       console.log(file);
//     }
//   });
// });

// 6. MAKE IT MODULAR
// var module = require('./module.js');
// module(process.argv[2], process.argv[3], function(err, data) {
//   if (err) {
//     return err;
//   }
//   data.forEach(function(name) {
//     console.log(name);
//   });
// });

// 7. HTTP CLIENT
// var http = require('http');
// http.get(process.argv[2], function(response){
//   // passes data as String instead of buffer
//   response.setEncoding('utf8');
//   // rather than using an anon fx, the data will be piped into 2nd arg
//   response.on('data', console.log);
//   response.on('error', console.error);
// });

// 8. HTTP COLLECT
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

// 9. JUGGLING ASYNC
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

// 10. TIME SERVER
// var net = require('net');

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// // every connection received by this server triggers another call to the cb.
// // every call also returns an instance of the server.
// var server = net.createServer(function(socket) {
//   var date = new Date();
//   socket.write(now() + '\n');
//   socket.end();
// });
// server.listen(process.argv[2]);

// 11. HTTP FILE SERVER
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//   fs.createReadStream(process.argv[3]).pipe(res)
// });
// server.listen(process.argv[2]);

// 12. HTTP UPPERCASERER
// var http = require('http');
// var map = require('through2-map')
// var server = http.createServer(function(req, res) {
//   if (req.method != 'POST') {
//     return res.end('send me a POST\n');
//   }
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// });
// server.listen(process.argv[2]);

// 13. HTTP JSON API SERVER
// THEIR SOLUTION
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))




