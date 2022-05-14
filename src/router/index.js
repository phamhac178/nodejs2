const express = require('express');
const todoRouter = require('./todorouter.js')



function route(app) {

    app.use('/', todoRouter);
}

module.exports = route;