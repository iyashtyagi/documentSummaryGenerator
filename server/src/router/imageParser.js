const express = require("express");
const { imageParser } = require("../utils/imageUtil");
const router = express.Router();

router.get("/", async (req, res)=>{
    const result = await imageParser();
    if (!result.isData) {
        res.status(411).json({"message": "something went wrong"});
    }
    res.json({ data: result.data });
})

module.exports = router;