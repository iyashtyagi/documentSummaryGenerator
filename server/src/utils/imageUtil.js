const path = require("path");
const Tesseract = require("tesseract.js");

const baseImageFolderPath = path.join(__dirname, "../../sample/image");

// to parse image 
async function imageParser(){
    let isData = true;
    try {
        const imagePath = path.join(baseImageFolderPath, "code.png");
        const worker = await Tesseract.createWorker('eng');
        const result = await worker.recognize(imagePath);
        await worker.terminate();
        return { isData, data: result.data.text }
    } catch (error) {
        isData = false;
        console.error(error);
        return { isData };
    }
}

module.exports = {
    imageParser
};