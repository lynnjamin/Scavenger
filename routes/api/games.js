const router = require("express").Router();
const booksController = require("../../controllers/gamesController");

// Matches with "/api/games"
router.route("/")
  .get(gameController.findAll)
  .post(gamesController.create);

// Matches with "/api/games/:id"
router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
