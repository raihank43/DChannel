const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send(`test from routes threads`)
})

module.exports = router