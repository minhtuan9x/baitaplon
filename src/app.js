const express = require('express');
const app = express();
const route = require('./routes/main');
const port = 3000




route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})