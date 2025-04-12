import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

//get current file path
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Set up view engine
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

app.get("/api/tasks", async (req, res) => {
  const { complete } = req.query;

  let query = supabase.from("tasks").select("*");

  if (complete !== undefined) {
    const isComplete = complete === "true";
    query.query.eq("complete", isComplete);
  }
  const { data, error } = await query;
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json(data);
});

app.get("api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json(data);
});

app.post("/api/tasks", async (req, res) => {
  const { title, description, complete } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const { data, error } = await supabase
    .from("tasks")
    .insert({ title, description, complete: complete || false });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json(data[0]);
});

app.put("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, complete } = req.body;
  const { data, error } = await supabase
    .from("tasks")
    .update({ title, description, complete })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data[0]);
});


app.delete("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});