var express = require('express');
var bodyParser  = require('body-parser');
var userService = require('./src/api/Services/User/');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 8081;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set body parser to manage the request bodies
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Here we require the prerender middleware that will handle requests from Search Engine crawlers
// We set the token only if we're using the Prerender.io service
app.use(require('prerender-node').set('prerenderToken', '5dJcI1b3c7hpuDwrNoFb'));
app.use(express.static('./dist'));

app.get('*', function(req, res) {
  res.sendfile('./dist/index.html');
});

// Custom routes
app.post('/Users', userService.addUser);
app.post('/Users/Login', userService.login);

app.listen(port, () => {
  console.log('listening on http://localhost:' + port + '!');
});
