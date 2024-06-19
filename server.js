const { default: axios } = require("axios");
const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

const call_period = 60000;

const server_caller = async () => {
  let server_url = await JSON.parse(process.env.server_urls);
  server_url.forEach(async (v, i) => {
    let res = await axios.get(v);
  });
};

const server_caller_input = () => {
  setTimeout(server_caller, call_period);
};

app.get("/", (req, res) => {
  // server_caller_input();
  res.send("Hello Dunia!");
});
app.listen(port, () => console.log(`Example app listening on port ${process.env.port}!`));
