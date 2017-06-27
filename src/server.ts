import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
var userService = require('./api/Services/User/');
var bodyParser  = require('body-parser');

const PORT = 8081;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

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

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

// Custom routes
app.post('/Users', userService.addUser);
app.post('/Users/Login', userService.login);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
