const express = require("express");
const router = express.Router();

const someControllerFunction = (req, res) => {
  res.send("Hello world!");
};

router.get("/some-endpoint", someControllerFunction);

module.exports = router;
