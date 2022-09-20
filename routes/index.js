const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts')) 

//-----exercise-----
// router.post('/contacts', (req, res) =>{
//     console.log(req.body);
//     console.log(req.query);
//     res.status(201).send({error: '', body: 'Created correctly'});
// });


module.exports = router;

