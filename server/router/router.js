const express = require("express");
const mainRouter = express.Router();
const { getAll, addNewPost } = require("../controller/controller");

mainRouter.get("/", getAll);
mainRouter.post("/post", addNewPost);

module.exports = mainRouter;
