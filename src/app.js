const express = require("express");
const app = express();

app.use("/user",(req,res,next)=>{
    console.log("i am in 1st route handler")
    // res.send("1st response");
    next();
},(req,res)=>{
    console.log("i am in 2nd response");
    res.send("2nd response");
});


app.listen(3000,()=>{
    console.log("listening on port 3000....");
});