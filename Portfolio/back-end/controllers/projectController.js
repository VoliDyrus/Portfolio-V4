const projectModel = require("../models/projectModel");

//post
const createProject = async (req, res) => {
  try {
    const { insertId } = await projectModel.addProject(req.body);
    if (!insertId) throw new Error("Error creating project");
    res.status(200).json({ insertId });
  } catch (error) {
    console.log(error);
  }
};

// get
const retrieveProject = async (req, res) => {
  try {
    const results = await projectModel.requestProject(req.body);
    if (!results.length) throw new Error("Error retrieving the Projects list");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

//get by id
const retrieveProjectById = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await projectModel.requestProjectById(id);
    if (!results) throw new Error("Error retrieving the project");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

//delete
const removeProject = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await projectModel.deleteProject(id);
    if (!results) throw new Error("Error deleting Project");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

//patch
const editProject = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await projectModel.updateProject(req.body.github_link, id);
    if (!results) throw new Error("Error updating Project");
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProject,
  retrieveProject,
  retrieveProjectById,
  removeProject,
  editProject,
};
