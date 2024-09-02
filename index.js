const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectDb = require("./config/databse");
connectDb();

app.listen(PORT, () => {
    console.log(`App started successfully at ${PORT}`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is homepage</h1>`);
})