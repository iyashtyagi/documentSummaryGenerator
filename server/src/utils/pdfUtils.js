const fs = require("fs/promises");
const path = require("path");
const pdfParse = require("pdf-parse");

const basePdfFolderPath = path.join(__dirname, '../../sample/pdf');

// to parse pdf
async function fileParser(){
    const pdfName = "English_French.pdf";
    const pdfPath = path.join(basePdfFolderPath, pdfName);
    let isData = true;
    try {
        const dataBuffer = await fs.readFile(pdfPath);
        const data = await pdfParse(dataBuffer);
        return { isData, data };  
    } catch (error) {
        isData = false;
        console.error(error);
        return { isData };
    }
}

module.exports = {
    fileParser
}