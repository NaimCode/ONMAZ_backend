const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const blogsRoute = require("./view/blog");
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection successfull"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/blogs", blogsRoute);
app.listen(port, () => console.log("Server is running"));
