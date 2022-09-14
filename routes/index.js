const { builtinModules } = require('module');

const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Irad Calvo')
});

module.exports = routes;