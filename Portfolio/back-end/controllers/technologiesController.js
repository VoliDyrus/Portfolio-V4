const technologiesModel = require("../models/technologiesModel");

// post
const createTechnologies = async (req, res) => {
  try {
    const { insertId } = await technologiesModel.addTechnologie(req.body);
    if (!insertId) throw new Error("Error creating Technologie");
    res.status(200).json({ insertId });
  } catch (error) {
    console.log(error);
  }
};

// get
const retrieveTechnologies = async (req, res) => {
  try {
    const results = await technologiesModel.requestTechnologies(req.body);
    if (!results.length) throw new Error("Error retrieving Technologies list ");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

//get by id
const retrieveTechnologiesById = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await technologiesModel.requestTechnologiesById(id);
    if (!results) throw new Error("Error retrieving Technologie");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

//delete
const removeTechnologie = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await technologiesModel.deleteTechnologie(id);
    if (!results) throw new Error("Error deleting Technologie");
    res.status(200).json(results.affectedRows);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTechnologies,
  retrieveTechnologies,
  retrieveTechnologiesById,
  removeTechnologie,
};
