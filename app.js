const express = require("express");
const bodyParser = require("body-parser");

const route = require("./routes/route");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.use("/////apihello1234123454334534546  hi   Lia", route);

app.listen(5000, console.log("server started"));
