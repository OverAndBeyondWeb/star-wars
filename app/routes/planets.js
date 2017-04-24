var express = require('express');
var router = express.Router();

const API = 'swapi';

router.get(API ==='swapi' ? '/planets' : '/cars', function(req, res) {

    res.render('planets');

});


router.get('/planets/:planetid',function(req, res) {

    //var planet = planets[req.params.planetid];

    res.render('planet', {
        planet: req.params.planetid
    });

    /*res.send(`
                   <h1>${planet.name}</h1>
                   <img src="../images/planets/${planet.name}.jpg">
                   <p>${planet.url}</p>
                   <script src="/reload/reload.js"></script>
                `);*/
});

module.exports = router;