require("dotenv").config();
const express = require("express");
require("./models/signUpModels");
const User = require("./models/signUpModels"); //schema data
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

//connecting data
mongoose.connect(process.env.DATABASE_ACCESS, () =>
    console.log("Hi, my DATABASE is connected!")
);

//middleware
app.use(express.json());
app.use(cors());

//Sign-Up route
app.post("/signup", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});


//login
app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.send({ result: "No data found!" });
        }
    } else {
        res.send({ result: "No data found!" });
    }
});

//listen
app.listen(process.env.PORT || 5001)