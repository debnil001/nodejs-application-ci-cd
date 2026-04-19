const express = require("express");
const morgan = require("morgan");
const path = require("path");

const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// ✅ Serve static files
app.use(express.static(path.join(__dirname, "../public")));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// API
app.use("/api/users", userRoutes);

// ✅ Default route (UI)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;