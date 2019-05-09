const router = require("express").Router();
const gamesController = require("../../../controllers/gamesController");


app.route("/").get(gamesController.findAll)