const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");

router.get("/", Controller.boards)
router.post("/", Controller.addPost)
router.use("/threads", require("./threads"))

module.exports = router