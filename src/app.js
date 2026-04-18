const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.use("/api/users", userRoutes);

module.exports = app;