var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    res.render('index', 
      { 
        title: 'Le Mans 24 Hours - Dashboard' 
      });
});

var ticks = new Date().getTime();
router.get('/version', function(req, res) {
    res.send(ticks.toString());
})

module.exports = router;