const http = require("http");
const express = require("express");
var bodyParser = require("body-parser");
let teams = require("db2.js");
const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))

app.use(express.json())

app.get("/teams", function (req, res) {
  res.json(teams.teams);
});

app.get("/teams:id", function (req, res) {
  console.log(req.params.id)
  let teamID = req.params.id
  res.json(teams.teams[teamID]);
});

app.post("/teams", function (req, res) {
  var query1 = req.body;
  console.log(query1)
  console.log("recibi el post")
  res.sendStatus(200);
  teams.teams[query1.id] = query1;
  console.log(teams)
});

app.patch("/teams:id", function (req, res) {
  let teamID = req.params.id;
  var query1 = req.body;
  console.log(query1)
  console.log("recibi el patch")
  teams.teams[teamID] = query1;
  console.log(teams)
  res.sendStatus(200);
});

app.delete("/teams:id", function (req, res) {
  console.log(req.params.id)
  console.log("recibi el delete")
  delete teams.teams[req.params.id];
  console.log(teams)
  res.sendStatus(200);
});

app.listen(3000, () => console.log(`Started server at http://localhost:3000!`));
