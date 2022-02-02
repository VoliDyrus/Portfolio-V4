const connection = require("../config/db_config");

//post
const addProject = async ({ ...body }) => {
  try {
    let [results] = await connection.query("INSERT INTO projects SET ?", {
      ...body,
    });
    return results;
  } catch (error) {
    throw Error;
  }
};

// get
const requestProject = async () => {
  try {
    let [results] = await connection.query("SELECT * FROM projects");
    return results;
  } catch (error) {
    throw Error;
  }
};

// get by id
const requestProjectById = async (id) => {
  try {
    let [results] = await connection.query(
      "SELECT * FROM projects WHERE id = ?",
      [id]
    );
    return results[0];
  } catch (error) {
    throw Error;
  }
};

// delete
const deleteProject = async (id) => {
  try {
    let [results] = await connection.query(
      "DELETE FROM projects WHERE id = ?",
      [id]
    );
    return results;
  } catch (error) {
    throw Error;
  }
};

// patch
const updateProject = async (link, id) => {
  try {
    let [results] = await connection.query(
      "UPDATE projects SET github_link = ? WHERE id = ?",
      [link, id]
    );
    console.log(link);
    return results.affectedRows;
  } catch (error) {
    throw Error;
  }
};

module.exports = {
  addProject,
  requestProject,
  requestProjectById,
  deleteProject,
  updateProject,
};
