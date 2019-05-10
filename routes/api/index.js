const router = require("express").Router();
const gameRoutes = require("./games");
const usersRoutes = require("./users");


router.use("/games", gameRoutes);
router.use("/users", usersRoutes)

module.exports = router;
