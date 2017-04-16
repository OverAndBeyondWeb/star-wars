var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {

    res.send(`
        <link rel="stylesheet" href="css/main.css">
        <h1>Welcome to the Site</h1>
        <img src="/images/planets/scene.jpg" style="height: 300px;">
        <p>Check out our brand new updates!</p>
        `);

});

module.exports = router;