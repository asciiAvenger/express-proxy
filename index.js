const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxyServer = httpProxy.createProxyServer();

const urls = {
    cloud: 'http://localhost:81',
    counter: 'http://localhost:3000',

};

app.all('/', (req, res) => {
    console.log('redirecting to cloud');
    proxyServer.web(req, res, {target: urls.cloud});
});

app.all('/counter', (req, res) => {
    console.log('redirecting to counter');
    proxyServer.web(req, res, {target: urls.counter});
})

app.listen(80);