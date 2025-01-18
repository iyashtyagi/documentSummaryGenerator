const express = require("express");
const { fileParser } = require("../utils/pdfUtils");
const { upload } = require("../utils/multerUtil");

const router = express.Router();

// parsed pdf endpoint
router.post("/", upload.single("file"), async (req, res)=>{
    const filePath = req.file.path;
    const result = await fileParser(filePath);
    if (!result.isData) {
        res.status(411).json({"message": "something went wrong"});
    }
    res.json({ isData: result.isData, data: result.data });
})

module.exports = router;