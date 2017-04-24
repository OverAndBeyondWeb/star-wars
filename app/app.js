const express = require('express');
const app = express();
const request = require('request');
const fs = require('fs');

const planetData = require('./data/planets.json');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.locals.siteTitle = 'Mwah ha ha';

/********* Set API **********/
const API = 'swapi';
var url = (API === 'swapi' ? 'http://swapi.co/api/planets' : 'https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=abeazrq5k5nbpeq68tpu9be9');

/********** Make API Call *********/
function requestData() {
    request(url, function(err, resp, body) {

        data = JSON.parse(body);
        /*fs.writeFile('app/data/planets.json', JSON.stringify(data), 'utf8', function(err) {
         console.log(err);
         });*/

    });
}


/******** Set Site Urls **********/
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/planets'));



app.locals.planets = planetData.results || requestData();

console.log(app.locals.planets);
var server = app.listen(app.get('port'), function() {
    console.log('listening on port ' + app.get('port'));
});