var Forecast = require('forecast');
var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

router.get('/', function(req, res) {

  // https://developer.forecast.io/docs/v2#forecast_call
  var forecast = new Forecast({
    service: 'forecast.io',
    key: 'efbcfa7307e32407822be9d177d440c5',
    units: 'celcius',
    cache: true,     
    ttl: {           // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
        minutes: 10,
        seconds: 00
      },
    //exclude=[minutely, hourly, daily, flags]
  });

  // Retrieve weather information from coordinates (Sydney, Australia)
  forecast.get([47.941667, 0.225], function(err, weather) {
    if(err) console.info(err);
    //else console.info(weather);

    res.json(weather);
  });

});

module.exports = router;
