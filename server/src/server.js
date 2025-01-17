const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const pdfRouter = require("./router/pdfParser");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use('/pdf', pdfRouter);

app.get('/', (req, res)=>{
    res.send('Server is running.');
})

app.listen(PORT, ()=>{
    console.log(`Server started \nPort: ${PORT}\nURL: https://localhost:8080`);
})