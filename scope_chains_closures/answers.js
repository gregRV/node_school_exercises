function foo() {
  var bar;
  quux = 'hey';

  function zip() {
    var quux = 'you';
    bar = true;
  }

  return zip;
}