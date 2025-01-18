const fs = require("fs/promises");
const path = require("path");
const pdfParse = require("pdf-parse");

const basePdfFolderPath = path.join(__dirname, '../../sample/pdf');

// to parse pdf
async function fileParser(filePath){
    let isData = true;
    try {
        const dataBuffer = await fs.readFile(filePath);
        const result = await pdfParse(dataBuffer);
        return { isData, data: result.text };  
    } catch (error) {
        isData = false;
        console.error(error);
        return { isData };
    }
}

module.exports = {
    fileParser
}