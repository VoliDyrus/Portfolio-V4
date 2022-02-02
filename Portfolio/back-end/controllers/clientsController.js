const clientsModel = require("../models/clientsModel");

//post
const createClient = async (req, res) => {
  try {
    const { insertId } = await clientsModel.addClient(req.body);
    if (!insertId) throw new Error("Error creating client");
    res.status(200).json({ insertId });
  } catch (error) {
    console.log(error);
  }
};

//get
const retrieveClient = async (req, res) => {
  try {
    const results = await clientsModel.requestClients(req.body);
    if (!results.length) throw new Error("Error retrieving Clients");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

//get by id
const retrieveClientById = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await clientsModel.requestClientsById(id);
    if (!results) throw new Error("Error retrieving Client ");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

//delete
const removeClient = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await clientsModel.deleteClient(id);
    if (!results) throw new Error("Error deleting client");
    res.status(200).json(results.affectedRows);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createClient,
  retrieveClient,
  retrieveClientById,
  removeClient,
};
