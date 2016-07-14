//Server-side file. Coded from scratch by Sumant Bagade
var express = require('express');

var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var http = require('http');

var myRouter = express.Router();
//Creating a route
/*myRouter.route('/').get(function(req,res){

	res.render('showlist');

});

//Useful for creating 2degree routes
//Using a route
app.use('/showlist', myRouter ); */

//Middlewares
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

var server = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write("Welcome to Node.js on OpenShift!\n\n");
    response.end("Thanks for visiting us! \n");
});

server.listen(port, ipaddress, function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});