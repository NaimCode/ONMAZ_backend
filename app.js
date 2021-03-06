const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRoute = require("./routes/blog");
const rvRouter = require("./routes/rv");
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection successfull"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/blogs", blogsRoute);
app.use("/rv", rvRouter);
app.get("/", (req, res) => res.send("Server is running"));
app.listen(port, () => console.log("Server is running"));
