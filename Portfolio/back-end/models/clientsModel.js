const connection = require("../config/db_config");

//post
const addClient = async ({ ...body }) => {
  try {
    let [results] = await connection.query("INSERT INTO clients SET ?", {
      ...body,
    });
    return results;
  } catch (error) {
    throw Error;
  }
};

// get
const requestClients = async () => {
  try {
    let [results] = await connection.query("SELECT * FROM clients");
    return results;
  } catch (error) {
    throw Error;
  }
};

// get by id
const requestClientsById = async (id) => {
  try {
    let [results] = await connection.query(
      "SELECT * FROM clients WHERE id = ?",
      [id]
    );
    return results;
  } catch (error) {
    throw Error;
  }
};

// delete
const deleteClient = async (id) => {
  try {
    let [results] = await connection.query("DELETE FROM clients WHERE id = ?", [
      id,
    ]);
    return results;
  } catch (error) {
    throw Error;
  }
};

module.exports = {
  addClient,
  requestClients,
  requestClientsById,
  deleteClient,
};
