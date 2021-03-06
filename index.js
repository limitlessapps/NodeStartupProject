const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const Routes = require("./routes/Routes");

//=====================================================================App use
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(cors());

//===================================================================== port 5000

const port = process.env.PORT || 5000;
app.listen(port,console.log(`app is running at ${port}`))

//===================================================================== routes
app.use("/api", Routes);

//=====================================================================localhost connection
mongoose.connect('mongodb://localhost:27017/version2',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
    , function () {
        console.log("App connected success")
    });