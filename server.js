//packages needed
var express = require('express');
var app = express();
var router = express.Router();	//router for the api

var port = process.env.PORT || 8000;	//set the port

app.use(express.static(__dirname + '/app'));

app.use('/', router);	//All routes will be prefixed with /api/v1

//ReST API ROUTES
router.get('/folders', function (req, res){
	//res.json(json);
});

app.listen(port);
console.log('Node server running on port ' + port);