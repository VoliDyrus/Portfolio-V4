const clientsRoute = require("express").Router();
const clientsController = require("../controllers/clientsController");

clientsRoute.post("/", clientsController.createClient);

clientsRoute.get("/", clientsController.retrieveClient);

clientsRoute.get("/:id", clientsController.retrieveClientById);

clientsRoute.delete("/:id", clientsController.removeClient);

module.exports = clientsRoute;
