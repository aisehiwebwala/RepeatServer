const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3001;
require("dotenv").config();

const call_period = 60000;
const server_caller = async () => {
  let res = await axios.get("https://repeatserver-7anv.onrender.com/");
};

app.get("/", (req, res) =>{
    setTimeout(server_caller,call_period)
    res.send("Hello World s2!");
} );
app.listen(port, () => console.log(`Example app listening on port ${process.env.port}!`));
