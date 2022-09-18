// const { builtinModules } = require('module');

// const routes = require('express').Router();

// routes.get('/', (req, res) =>{
//     res.send('Irad Calvo Rivas')
// });

// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;