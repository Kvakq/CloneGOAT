const express = require("express");
const cors = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
