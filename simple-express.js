var express = require('express');

var app = express();

// config
app.configure(function() {
   
});

// routes
app.get('/', function(req, res) {
   res.send('Hello World');
});

app.listen(3000);
