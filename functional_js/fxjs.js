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
