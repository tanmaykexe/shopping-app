const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "OK",
        message: "Shopping API is healthy 🚀"
    });
});

module.exports = router;
