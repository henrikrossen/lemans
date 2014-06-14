var Forecast = require('forecast');
var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

router.get('/', function(req, res) {

  var forecast = new Forecast({
    service: 'forecast.io',
    key: 'efbcfa7307e32407822be9d177d440c5',
    units: 'celcius', // Only the first letter is parsed
    cache: true,      // Cache API requests?
    ttl: {           // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
        minutes: 10,
        seconds: 00
      }
  });

  // Retrieve weather information from coordinates (Sydney, Australia)
  forecast.get([47.941667, 0.225], function(err, weather) {
    if(err) console.info(err);
    //else console.info(weather);

    res.json(weather);
  });

});

module.exports = router;
