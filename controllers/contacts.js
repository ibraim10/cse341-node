const Model = require('../db/model');

// eslint-disable-next-line no-unused-vars
const getAll = async (req, res, next) => {
    const contacts = await Model.find();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
};

// eslint-disable-next-line no-unused-vars
const getSingle = async (req, res, next) => {
    const { userId } = req.params;
    const contact = await Model.findById(userId);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
};

// eslint-disable-next-line no-unused-vars
const createContact = async (req, res, next) => {
    const addContact = new Model(req.body);
    const newContact = await addContact.save();
    // eslint-disable-next-line no-underscore-dangle
    res.status(201).json({ success: true, id: newContact._id });
};

// eslint-disable-next-line no-unused-vars
const updateContact = async (req, res, next) => {
    const { userId } = req.params;
    const Contact = req.body;
    await Model.findByIdAndUpdate(userId, Contact);
    res.status(204).json({ success: true });
};

// eslint-disable-next-line no-unused-vars
const deleteContact = async (req, res, next) => {
    const { userId } = req.params;
    await Model.findByIdAndRemove(userId);
    res.status(200).json({ success: true });
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact,
};
