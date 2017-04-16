var express = require('express');
var router = express.Router();

const API = 'swapi';

router.get(API ==='swapi' ? '/planets' : '/cars', function(req, res) {

    var info = '';

    if (API === 'swapi') { /*SWAPI  data*/
        data.results.forEach(function(item) {
            info += `<li><h1>${item.name}</h1><img src="images/planets/${item.name}.jpg"><p>${item.population}</p></li>`;
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


router.get('/planets/:planetid',function(req, res) {

    var planet = data.results[req.params.planetid];

    res.send(`
                   <h1>${planet.name}</h1>
                   <img src="../images/planets/${planet.name}.jpg">
                   <p>${planet.url}</p>
                `);
});

module.exports = router;