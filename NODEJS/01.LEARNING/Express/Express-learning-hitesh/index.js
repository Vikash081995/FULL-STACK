import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

let tea = [];
let nextId = 1;

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  tea.push(newTea);
  res.status(201).json(newTea);
});

// List all teas
app.get("/teas", (req, res) => {
  res.json(tea);
});

// Get a tea by id
app.get("/teas/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = tea.find((t) => t.id === id);
  if (!item) return res.status(404).json({ error: "Tea not found" });
  res.json(item);
});

// Replace a tea (full update)
app.put("/teas/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, price } = req.body;
  if (!name || price === undefined)
    return res.status(400).json({ error: "name and price are required" });

  const idx = tea.findIndex((t) => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Tea not found" });

  tea[idx] = { id, name, price };
  res.json(tea[idx]);
});

// Partial update
app.patch("/teas/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, price } = req.body;

  const item = tea.find((t) => t.id === id);
  if (!item) return res.status(404).json({ error: "Tea not found" });

  if (name !== undefined) item.name = name;
  if (price !== undefined) item.price = price;

  res.json(item);
});

// Delete a tea
app.delete("/teas/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = tea.findIndex((t) => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Tea not found" });

  tea.splice(idx, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
