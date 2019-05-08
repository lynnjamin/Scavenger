const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/games", gameRoutes);

module.exports = router;
