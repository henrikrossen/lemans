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
  		  if (err) return console.log(err);
  		  res.json(JSON.parse(data));
  		});	
    }
});

// http://localhost:3000/data/listhistoryfiles
router.get('/listhistoryfiles', function(req, res) {
  var dir = path.join(process.cwd(), "public/dump");

  fs.readdir(dir, function (err, files) {
    if (err) throw err;

    files = files.sort();
    res.json(files);
  });
});

router.get('/gethistoryfilebyindex', function(req, res) {
  var index = req.query.index - 1;
  var dumpDir = path.join(process.cwd(), "public/dump");

  fs.readdir(dumpDir, function (err, files) {
    if (err) throw err;

    if (index < files.length) {
      files = files.sort();
      var file = files[index];

      var dir = path.join(process.cwd(), "public/dump", file);
      fs.readFile(dir, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }

        res.json(data);
      });
    } else {
      res.json("");
    }
  });
});

module.exports = router;
