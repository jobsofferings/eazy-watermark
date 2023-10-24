const express = require("express");
const morgan = require("morgan");
const path = require("path");
var compression = require('compression');

const STATIC_DIR = './build';
const app = express();

app.use(morgan());
app.use(compression())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

function setCustomCacheControl (res, path) {
  if (express.static.mime.lookup(path) === 'text/html') {
    res.setHeader('Cache-Control', 'no-cache')
  }
}

app.use(express.static(STATIC_DIR,{
  maxAge: '1y',
  setHeaders: setCustomCacheControl
}));

app.use('/*', function(req, res) {
  res.sendFile(path.join(__dirname, STATIC_DIR, 'index.html'))
});

// 固定端口，勿换
app.listen(3000, () => console.log("venus fe-help module Start"));
