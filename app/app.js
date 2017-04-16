var express = require('express');
var request = require('request');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('food', 'pizza');

app.get('/', function(req, res) {

    /*/!*SWAPI  data*!/
    var url = 'http://swapi.co/api/planets';

    request(url, function(err, resp, body) {

        data = JSON.parse(body);
        console.log(data);
        var info = '';

        data.results.forEach(function(item) {
            info += '<li><h2>' + item.name + '</h2><p>' + item.population + '</p></li>';
        })
        res.send('<h1>How Bout Dem Cars</h1>' + info);

    });*/

    /*Edmunds data*/
    var url = 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=abeazrq5k5nbpeq68tpu9be9';

    request(url, function(err, resp, body) {

        data = JSON.parse(body);
        console.log(data);
        var info = '';

        data.makes.forEach(function(item) {
            info += '<li><h2>' + item.name + '</h2><p>' + item.models[0].name + '</p></li>';
        })
        res.send('<h1>How Bout Dem Cars</h1>' + info);

    });

});


var server = app.listen(app.get('port'), function() {
    console.log('listening on port ' + app.get('port'));
});