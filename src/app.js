const express = require("express");
const app = express();

app.use("/hello",(req,res)=>{
    res.send("U asked for hello..?");
});

app.use("/test",(req,res)=>{
    res.send("U entered the server");
});
app.use("/",(req,res)=>{
    res.send("Nothing to search");
});

app.listen(3000,()=>{
    console.log("listening on port 3000....");
});