const express = require('express');
const http = require('http');
const path = require('path');
const enforce = require('express-sslify');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(enforce.HTTPS({ trustProtoHeader: true }))

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});