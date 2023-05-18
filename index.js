const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const produkRouter = require("./api/routes");

app.use(bodyParser.json());
app.use(produkRouter);
app.listen(port, () => {
  console.log(`Server started on port`);
});
