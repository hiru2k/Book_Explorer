require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use("/user", require("./routers/userRouter"));
app.use("/api", require("./routers/categoryRouter"));
app.use("/api", require("./routers/productRouter"));

// connect to mongodb
const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(bodyParser.json()); // for parsing request body in json format
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "welcome to the ecommecr world " });
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is up and running", PORT);
});
