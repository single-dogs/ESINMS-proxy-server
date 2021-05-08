const express = require('express');
const httpProxy = require('http-proxy');
const config = require('./config.json');
const app = express();

const proxy = httpProxy.createProxyServer({ target: config.target });

app.use(express.static(__dirname + './public'));

app.use(proxy.web.bind(proxy));

app.listen(config.localPort)