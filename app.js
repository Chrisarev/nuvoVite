const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const path = require('path');

/***************** DATABASE CONFIG *****************/
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});///creates db yelp-camp(or connects to it if already made)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected")
});///checks to see if connected and handles db connection error

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

