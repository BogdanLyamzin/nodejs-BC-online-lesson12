const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const {postsRouter} = require("./api");

const app = express();

app.use(cors());

app.use("/posts", postsRouter);

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> app.listen(3000))