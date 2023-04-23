const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Connection = require("./connection/connection")
Connection()
const login = require("./routes/login")
const register = require("./routes/login")
const newbook = require("./routes/login")
const app = express();
app.use(cors())

app.use("/api/v1",login)
app.use("api/v1",register)
app.use("api/v1",newbook)







app.listen(5000,()=>{console.log("server is up at 5000...")})