const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    if( req.query.name )
        res.send('<h1>Hello '+req.query.name+'</h1>');
    else
        res.send('<h1>Hello world</h1>');
});


server.listen(5000, () => {
    console.log('listening on *:5000');
});