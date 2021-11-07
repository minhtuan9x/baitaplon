const express = require('express');
const app = express();
const route = require('./routes/main');
const ejs = require('ejs');
const path = require('path');



const port = 3000
var db = require("./database/connectDB");
db();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.set('views', path.join(__dirname,'views/building'));
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})