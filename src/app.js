const express = require("express");
const app = express();

const {connectDb} = require("./config/database");
const User = require("./models/user");

app.post("/users",async (req,res)=>{
    const newUser = new User({
        firstName:"Gopicharanreddy",
        lastName :"Gangula",
        emailId :"Gopicharanreddygangula@gmail.com",
        password:"CFGHJ%^"
    });
    await newUser.save();
    res.send("posted successfully");
});



connectDb()
    .then(()=>{
        console.log("connected to database");
        app.listen(3000,()=>{
            console.log("listening on port 3000....");
        });
    })
    .catch((e)=>{
        console.log("database cannot be connected");
    })



