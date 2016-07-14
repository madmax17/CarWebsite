//Server-side file. Coded from scratch by Sumant Bagade
var express = require('express');

var app = express();

var osipaddress = process.env.OPENSHIFT_NODEJS_IP;
var osport = process.env.OPENSHIFT_NODEJS_PORT;

var http = require('http');

app.set('port', osport || 8000);
app.set('ipaddress', osipaddress);

var myRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('src/views'));
app.set('views', './src/views'); //for templating engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/home', function (req, res) {
    res.render('index');
});

var server = http.createServer(app);

server.listen(app.get('port'), app.get('ipaddress'), function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});