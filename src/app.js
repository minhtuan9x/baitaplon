const express = require('express');
const app = express();
const route = require('./routes/main');
const port = 3000
var db = require("./database/connectDB");
db();


route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})