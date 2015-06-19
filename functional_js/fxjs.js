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