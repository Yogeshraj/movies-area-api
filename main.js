import express from "express";
import connectDB from "./lib/db.js";
import movieRouters from "./routes/movies.routes.js";

// const express = require('express')
const app = express();
const port = 3000;

// To get json data
app.use(express.json());
// To get form data
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB();

app.get("/", (req, res) => {
  res.send("hello!");
});

app.use("/movies", movieRouters);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
