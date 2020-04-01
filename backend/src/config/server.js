const port = 3003;

const bodyParser = require('body-parser');

const express = require('express');

const server = express();

const allowCors = require('./cors');

/**
 *  sempre que houver uma requisi��o urlencoded(padr�o usado pra submiss�o de formul�rios)
 *  o bodyParser vai ser respons�vel pelo parse dos dados
 */
server.use(bodyParser.urlencoded({
    extended: true,
}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function(){
    console.log(`Backend is running on port ${ port }`);
});

module.exports = server;