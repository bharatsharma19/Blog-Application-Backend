const express = require("express");
const app = express();
const Port = 3001;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.listen(`${Port}`, () => {
  console.log("Backend is running Successfully on", { Port });
});
