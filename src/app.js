const express = require("express");
const app = express();

const {connectDb} = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.get("/patch",async (req,res)=>{
    try{
        const allUsers = await User.find({});
        console.log(allUsers);
        if (allUsers){
            res.send(allUsers);
        }
        else{
            res.send("No Users Here")
        }
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
});

app.get("/users",async (req,res)=>{
    try{
        const email = req.body.emailId;
        const findUserDetails = await User.find({emailId:email});
        if (findUserDetails.length === 0){
            res.send("No user found");
        } 
        else{
            res.send(findUserDetails);
        } 
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
})

app.post("/users",async (req,res)=>{
    const newUser = new User(req.body);
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



