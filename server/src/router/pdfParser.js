const express = require("express");
const { fileParser } = require("../utils/pdfUtils");

const router = express.Router();

// parsed pdf endpoint
router.get("/", async (req, res)=>{
    const data = await fileParser();
    res.json({ data });
})

module.exports = router;