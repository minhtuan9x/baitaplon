const express = require('express');
const app = express();
const route = require('./routes/main');
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');



const port = 3000
var db = require("./database/connectDB");
db();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})