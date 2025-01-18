const multer = require("multer");
const path = require("path");

const folderPath = path.join(__dirname, "../../uploads");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, folderPath);
    },
    filename: function (req, file, cb) {
        const safeFileName = file.originalname.split(" ").join("_");
        cb(null, `${Date.now()}-${safeFileName}`);
    }
})
  
const upload = multer({ storage: storage })

module.exports = {
    upload
}