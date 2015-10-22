var fs = require('fs');

module.exports = function(path, ext, cb) {
  fs.readdir(path, function(err, data) {
    if (err) {
      return cb(err);
    }

    var list = data.filter(function(file) {
      var splitFile = file.split('.');
      if (splitFile[1] === ext) {
        return file;
      }
    });

    cb(null, list);
  });
}