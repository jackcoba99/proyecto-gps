require("dotenv").config();
const express = require('express');
const cors = require("cors");
const dbconnect = require(".config/mongo");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

dbconnect(); 

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});