var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

router.get('/track', function(req, res) {
  var url = "http://guarded-sea-2301.herokuapp.com/";
  client = new Client();
  
  client.get(url, function(data, response){
    res.json(data.track);
  });
});

router.get('/weather', function(req, res) {
  var url = "http://guarded-sea-2301.herokuapp.com/";
  client = new Client();
  
  client.get(url, function(data, response){
    res.json(data.track.weather);
  });
});

router.get('/cars', function(req, res) {
  var url = "http://guarded-sea-2301.herokuapp.com/";
  client = new Client();
  
  client.get(url, function(data, response){
    res.json(data.cars);
  });
});

module.exports = router;
