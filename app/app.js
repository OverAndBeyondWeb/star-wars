var express = require('express');
var request = require('request');
var app = express();

app.set('port', process.env.PORT || 3000);


/********* Set API **********/
const API = 'swapi';
var url = (API === 'swapi' ? 'http://swapi.co/api/planets' : 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=abeazrq5k5nbpeq68tpu9be9');

/********** Make API Call *********/
request(url, function(err, resp, body) {

    data = JSON.parse(body);
    console.log(data);

        /******** Set Site Urls **********/
        app.use(express.static('app/public'));
        app.use(require('./routes/index'));
        app.use(require('./routes/planets'));


});


var server = app.listen(app.get('port'), function() {
    console.log('listening on port ' + app.get('port'));
});