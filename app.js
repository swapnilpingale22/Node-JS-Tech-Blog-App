require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;


app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, 'routes/blog.js')))




app.listen(port, () => {
    return console.log(`Blog app running on http://localhost:${port}`)
});