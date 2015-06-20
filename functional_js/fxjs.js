// HELLO WORLD 
function upperCaser(input) {
  // "why hello there"
  var word = input.split(' ');
  var uppers = [];

  word.forEach(function(w){
    uppers.push(w.toUpperCase());
  });

  return uppers.join(' ');
}
module.exports = upperCaser;


// ORDER FUNCTIONS
function repeat (operation, num) {
  if (num > 0) {
    operation();
    repeat(operation, --num);
  }
}
module.exports = repeat;


// MAP
function doubleAll (numbers) {
  return Array.prototype.map.call(numbers, function(n){
    return n * 2;
  });
}
module.exports = doubleAll;


// FILTER
function getShortMessages (messages) {
  return messages.filter(function(m){
      return m.message.length < 50;
    }).map(function(obj){
      return obj.message;
    });
}
module.exports = getShortMessages;


// EVERY SOME
function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    return submittedUsers.every(function(user){
      return goodUsers.some(function(gU){
        return gU.id === user.id;
      });
    })
  }
}
module.exports = checkUsersValid;


// REDUCE
function countWords (inputWords) {
  return inputWords.reduce(function(memo, word){
    memo[word] ? memo[word] += 1 : memo[word] = 1;
    return memo;
  }, {});
}
module.exports = countWords;


// RECURSION
function reduce (arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values 
}
module.exports = reduce;


// CALL
function duckCount () {
  // 'generic' method would have been good, if supported
  // var args = Array.slice(arguments);
  var args = Array.prototype.slice.call(arguments);
  return Array.prototype.filter.call(args, function(a){
    return Object.hasOwnProperty.call(a, 'quack');
  }).length;
}
module.exports = duckCount;


// PARTIAL APP W/O 'BIND'
var slice = Array.prototype.slice;
function logger (namespace) {
  // MY HACK IMPLEMENTATION, NOT KNOWING TO USE apply ON console.log
  // return function () {
  //   var args = slice.call(arguments);
  //   var argsString = [namespace].concat(args).join(' ');
  //   // Function.prototype.apply(console.log(), [argsString]);
  //   console.log(argsString);
  // }
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}
module.exports = logger;


// PARTIAL APP W/'BIND'
module.exports = function(namespace){
  // MY ANSWER, WAS NOT RETURNING THE BOUND FUNCTION
  // return function(){
  //   var args = Array.prototype.slice.call(arguments);
  //   console.log.bind(this, [namespace].concat(args).join(' '));
  // }

  // OFFICIAL ANSWER
  return console.log.bind(console, namespace);
}


// IMPLEMENT MAP WITH REDUCE
module.exports = function arrayMap(arr, fn){
  return arr.reduce(function(memo, elem){
    return memo.concat([fn(elem)]);
  }, []);
};
