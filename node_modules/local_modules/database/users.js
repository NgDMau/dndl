var records = [
    { id: 1, username: 'mau', password: 'infore2811', displayName: 'Mau D. Nguyen', emails: [ { value: 'mau@infore.vn' } ] }
  , { id: 2, username: 'hathu', password: 'infore2811', displayName: 'Thu H. Nguyen', emails: [ { value: 'hathu@infore.vn' } ] }
];

exports.users = require('./users');


exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
      for (var i = 0, len = records.length; i < len; i++) {
        var record = records[i];
        if (record.username === username) {
          return cb(null, record);
        }
      }
      return cb(null, null);
    });
  }