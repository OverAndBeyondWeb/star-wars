var express = require('express');
var request = require('request');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('food', 'pizza');


/********* Set API **********/
const API = 'swapi';
var url = (API === 'swapi' ? 'http://swapi.co/api/planets' : 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=abeazrq5k5nbpeq68tpu9be9');

/********** Make API Call *********/
request(url, function(err, resp, body) {

    data = JSON.parse(body);
    console.log(data);

        /******** Set Site Urls **********/
        app.get('/', function(req, res) {

            res.send(`<h1>Welcome to the Site</h1>`);

        });


        app.get(API ==='swapi' ? '/planets' : '/cars', function(req, res) {
            var info = '';



            if (API === 'swapi') { /*SWAPI  data*/
                data.results.forEach(function(item) {
                    info += '<li><h2>' + item.name + '</h2><p>' + item.population + '</p></li>';
                });
            } else if(API === 'edmunds') { /*/!************ Edmunds data *******************!/*/
                 data.makes.forEach(function(item) {
                 info += '<li><h2>' + item.name + '</h2><p>' + item.models[0].name + '</p></li>';
                 });
            } else {
                console.log('You must select an API to call');
            }

            res.send('<h1>How Bout Dem Cars</h1>' + info);

        });
        app.get('/planets/:planetid',function(req, res) {

            var planet = data.results[req.params.planetid];

            res.send(`
                   <h1>${planet.name}</h1>
                   <p>${planet.url}</p>
                `);
        });

});


var server = app.listen(app.get('port'), function() {
    console.log('listening on port ' + app.get('port'));
});