const express = require("express");
const router = express.Router();
const { imageParser } = require("../utils/imageUtil");
const { upload } = require("../utils/multerUtil");

router.post("/", upload.single("file"), async (req, res)=>{
    const imagePath = req.file.path;
    const result = await imageParser(imagePath);
    if (!result.isData) {
        res.status(411).json({"message": "something went wrong"});
    }
    const summary = await genSummary(result.data, req.body.length);
    res.json({ isData: result.isData, data: summary });
})

module.exports = router;