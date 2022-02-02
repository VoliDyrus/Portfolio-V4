const connection = require("../config/db_config");

// post
const addTechnologie = async ({ ...body }) => {
  try {
    let [results] = await connection.query("INSERT INTO technologies SET ?", {
      ...body,
    });
    return results;
  } catch (error) {
    throw Error;
  }
};

// get
const requestTechnologies = async () => {
  try {
    let [results] = await connection.query("SELECT * FROM technologies");
    return results;
  } catch (error) {
    throw Error;
  }
};

// get by id
const requestTechnologiesById = async (id) => {
  try {
    let [results] = await connection.query(
      "SELECT * FROM technologies WHERE id = ?",
      [id]
    );
    return results;
  } catch (error) {
    throw Error;
  }
};

// delete
const deleteTechnologie = async (id) => {
  try {
    let [results] = await connection.query(
      "DELETE FROM technologies WHERE id = ?",
      [id]
    );
    return results;
  } catch (error) {
    throw Error;
  }
};

module.exports = {
  addTechnologie,
  requestTechnologies,
  requestTechnologiesById,
  deleteTechnologie,
};
