var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config')
var controller = require('./controller');
require('dotenv/config')
var port = process.env.PORT || 8000;

config.init();

//Body-Parser
app.use(bodyParser.json());

app.use('/', controller);

app.listen(port, function () { console.log("Listening on port 8000"); });

