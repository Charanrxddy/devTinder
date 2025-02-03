const express = require("express");
const app = express();

app.get("/user",(req,res)=>{
    res.send({firstname:"Gopicharanreddy", lastname: "Gangula"})
});
app.post("/user",(req,res)=>{
    res.send("Saved to database");
});

// app.use("/hello",(req,res)=>{
//     res.send("U asked for hello..?");
// });

// app.use("/test",(req,res)=>{
//     res.send("U entered the server");
// });
// app.use("/",(req,res)=>{
//     res.send("Nothing to search");
// });

app.listen(3000,()=>{
    console.log("listening on port 3000....");
});