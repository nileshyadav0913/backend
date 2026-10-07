import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;
const FILE = "./requests.json";

app.use(cors());
app.use(express.json());

// Read data
const readData = () => {
  return JSON.parse(fs.readFileSync(FILE, "utf-8"));
};

// Write data
const writeData = (data) => {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};

// GET all requests
app.get("/api/requests", (req, res) => {
  res.json(readData());
});

// GET one request
app.get("/api/requests/:id", (req, res) => {
  const data = readData();
  const request = data.find(r => r.id == req.params.id);

  if (!request) {
    return res.status(404).json({ message: "Request not found" });
  }

  res.json(request);
});

// POST new request
app.post("/api/requests", (req, res) => {
  const data = readData();

  const newRequest = {
    id: Date.now(),
    ...req.body
  };

  data.push(newRequest);
  writeData(data);

  res.status(201).json(newRequest);
});

// PUT update request
app.put("/api/requests/:id", (req, res) => {
  const data = readData();
  const index = data.findIndex(r => r.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Request not found" });
  }

  data[index] = { ...data[index], ...req.body };
  writeData(data);

  res.json(data[index]);
});

// DELETE request
app.delete("/api/requests/:id", (req, res) => {
  const data = readData();
  const updated = data.filter(r => r.id != req.params.id);

  writeData(updated);

  res.json({ message: "Deleted Successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});