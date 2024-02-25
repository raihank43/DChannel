const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");

router.get("/", Controller.boards)
router.use("/threads", require("./threads"))

module.exports = router