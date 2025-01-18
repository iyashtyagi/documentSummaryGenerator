const express = require("express");
const { fileParser } = require("../utils/pdfUtils");
const { upload } = require("../utils/multerUtil");
const { genSummary } = require("../utils/geminiUtil");

const router = express.Router();

// parsed pdf endpoint
router.post("/", upload.single("file"), async (req, res)=>{
    const filePath = req.file.path;
    const result = await fileParser(filePath);
    if (!result.isData) {
        res.status(411).json({"message": "something went wrong"});
    }
    const summary = await genSummary(result.data, req.body.length);
    res.json({ isData: result.isData, data: summary });
})

module.exports = router;