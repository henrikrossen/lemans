var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

router.get('/', function(req, res) {
  var url = "http://guarded-sea-2301.herokuapp.com/";
  client = new Client();
  
  client.get(url, function(data, response){
    res.json(data);
  });
});

module.exports = router;
