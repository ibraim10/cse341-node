const express = require('express');

const router = express.Router();

// controller
const contactsController = require('../controllers/contacts');
// Get ALL contacts
router.get('/', contactsController.getAll);
// Get a Single contacts
router.get('/:userId', contactsController.getSingle);
// Create a new contact
router.post('/', contactsController.createContact);
// Update a contact
router.put('/:userId', contactsController.updateContact);
// Delete a contact
router.delete('/:userId', contactsController.deleteContact);

module.exports = router;
