const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Server is running.');
})

app.listen(PORT, ()=>{
    console.log(`Server started \nPort: ${PORT}`);
})