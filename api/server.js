const express = require('express');
const suppliersRoute = require('../suppliers/suppliers-router');
const server = express();
server.use(express.json());
server.use('/suppliers', suppliersRoute);
server.get('/', (req, res) => {
    res.status(200).json({api: 'up'});
})

module.exports = server;

