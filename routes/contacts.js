const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts'); //controller

router.get('/', contactsController.getAll);

router.get('/:userId', contactsController.getSingle);

module.exports = router;