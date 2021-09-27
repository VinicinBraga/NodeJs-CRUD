const express = require("express");
const server = express();
const port = 3000;
server.use(express.json());

const skills = ["html", "css", "Js", "NodeJs", "Python"];

//Retorna uma skill
server.get("/skills/:i", (req, res) => {
  const { i } = req.params;
  return res.json(skills[i]);
});

//Create
server.post("/skills/", (req, res) => {
  const { name } = req.body;
  skills.push(name);

  return res.json(skills);
});

//Read
server.get("/skills/", (req, res) => {
  return res.json(skills);
});

// Update
server.put("/skills/:i", (req, res) => {
  const { i } = req.params;
  const { name } = req.body;

  skills[i] = name;

  return res.json(skills);
});

//Delete
server.delete("/skills/:i", (req, res) => {
  const { i } = req.params;

  skills.splice(i, 1);
  return res.json({ message: `the skills ${i} was removed` });
});

server.listen(port, () => console.log(`Example app listening on port port!`));
