const express = require("express");
const app = express();

const {studentDetails} = require("./admin/studentDetails"); 


app.use("/admin",studentDetails);

app.get("/admin/updateDetails",(req,res)=>{
    res.send("Continue updating Details");
}); 
app.get("/admin/deleteDetails",(req,res)=>{
    res.send("Continue deleting Details");
}); 






app.listen(3000,()=>{
    console.log("listening on port 3000....");
});