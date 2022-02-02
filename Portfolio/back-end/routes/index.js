const apiRouter = require("express").Router();
const projectRouter = require("./projectsRoute");
const technologiesRouter = require("./technologiesRoute");
const clientsRouter = require("./clientsRoute");

apiRouter.use("/projects", projectRouter);
apiRouter.use("/technologies", technologiesRouter);
apiRouter.use("/clients", clientsRouter);

module.exports = apiRouter;
