const router = require("express").Router();
const gamesRoutes = require("./books");

// Game routes
router.use("/games", gamesRoutes);

module.exports = router;