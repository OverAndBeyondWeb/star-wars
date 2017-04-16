var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('<h1>How Bout Dem Cars</h1>');
})

var server = app.listen(3000, function() {
    console.log('lisening on port 3000');
});