const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/index");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  })
);

app.use("/api", apiRouter);

app.listen("4000", function () {
  console.log("server started on port 4000");
});
