const projectsRoute = require("express").Router();
const projectController = require("../controllers/projectController");

projectsRoute.get("/", projectController.retrieveProject);

projectsRoute.post("/", projectController.createProject);

projectsRoute.get("/:id", projectController.retrieveProjectById);

projectsRoute.delete("/:id", projectController.removeProject);

projectsRoute.patch("/:id", projectController.editProject);

module.exports = projectsRoute;
