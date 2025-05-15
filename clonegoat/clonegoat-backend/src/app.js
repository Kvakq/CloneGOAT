const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
