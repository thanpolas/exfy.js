// a simple static webserver
  var connect = require('connect');

    console.log('Starting static web server in "' + __dirname + '" on port 3333.');
    var app = connect()
      .use(connect.static(__dirname))
      .listen(3333);
