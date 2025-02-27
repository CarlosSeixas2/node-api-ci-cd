const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
});

app.get("subtracao", (req, res) => {
  const { a, b } = req.query;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Os valores devem ser números" });
  }
  res.json({ resultado: a - b });
});

app.post("/soma", (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Os valores devem ser números" });
  }
  res.json({ resultado: a + b });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
