const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
});

app.post("/soma", (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Os valores devem ser números" });
  }
  res.json({ resultado: a + b });
});

module.exports = app;
