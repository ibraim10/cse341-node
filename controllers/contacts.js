const Model = require('../db/model');

const getAll = async (req, res, next) =>{
  const contacts = await Model.find();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(contacts);
};

const getSingle = async (req, res, next) => {
  const {userId} = req.params;
  const contact = await Model.findById(userId);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
};


module.exports = { 
        getAll,
        getSingle
        };

