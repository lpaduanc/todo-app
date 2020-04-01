const port = 3003;

const bodyParser = require('body-parser');

const express = require('express');

const server = express();

const allowCors = require('./cors');

/**
 *  sempre que houver uma requisição urlencoded(padrão usado pra submissão de formulários)
 *  o bodyParser vai ser responsável pelo parse dos dados
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