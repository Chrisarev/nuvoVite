const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const path = require('path');

/***************** MIDDLEWARE CONFIG *****************/
const app = express();
app.use(express.json({ limit: "50mb" }))

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded({ extended: true })) ///allows us to get req.params 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serving on port: ${PORT}`)
})

