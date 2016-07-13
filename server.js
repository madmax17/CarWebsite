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

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Running on ' + port);
});