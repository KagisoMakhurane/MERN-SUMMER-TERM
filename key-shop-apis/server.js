const express= require("express");
const Product = require("./models/Product.js");
const productRoutes = require("./routes/productRoutes.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // create nodejs / express app server
app.use(cors());
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

console.log("Mongo URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully!"))
.catch((err) => console.log(err));

app.use("/api/products", productRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});