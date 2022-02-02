const technologiesRoute = require("express").Router();
const technologiesController = require("../controllers/technologiesController");

technologiesRoute.post("/", technologiesController.createTechnologies);

technologiesRoute.get("/", technologiesController.retrieveTechnologies);

technologiesRoute.get("/:id", technologiesController.retrieveTechnologiesById);

technologiesRoute.delete("/:id", technologiesController.removeTechnologie);

module.exports = technologiesRoute;
