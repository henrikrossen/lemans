var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var fs = require('fs')
var path = require('path')	

router.get('/', function(req, res) {
  var url = "http://guarded-sea-2301.herokuapp.com/";
  client = new Client();
  
  client.get(url, function(data, response){
    res.json(data);
  });
});

router.get('/loadhistory', function(req, res) {
    var index = req.query.index;

    if (index < 0 || index > 24)
    {
		res.json("");

    } else {
	    var dir = path.join(process.cwd(), "public/dump", index + ".json");

		fs.readFile(dir, 'utf8', function (err, data) {
			
		  if (err) {
		    return console.log(err);
		  }

		  res.json(JSON.parse(data));
		});	
    }
});

module.exports = router;
