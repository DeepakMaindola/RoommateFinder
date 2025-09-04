const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let idCounter = 1;


app.post("/api/users", (req, res) => {
  const newUser = { id: idCounter++, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});


app.get("/api/users", (req, res) => {
  res.json(users);
});


app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});


app.put("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });

  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(users[userIndex]);
});


app.delete("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });

  const deletedUser = users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully", deletedUser });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
