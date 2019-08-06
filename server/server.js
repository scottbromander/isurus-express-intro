const express = require('express');
const app = express();

const staff = require('./modules/staff');

//  that turns on, listen for connections on a port
// localhost:8000
app.listen(8000, function() {
    console.log('We turned the server on!');
});

// server/public/ + scripts/client.js
app.use(express.static('server/public'));



app.get('/staff', function(req,res) {
    res.send(staff);
})

// respond to when connections are made
// app.get('/', function(req,res) {
//     res.send('Hello Isurus');
// })

// localhost:8000/cats
// app.get('/cats', function(request,response) {
//     response.send('Meow');
// })