const express = require("express");
const app = express();

const {studentDetails} = require("./admin/studentDetails"); 


app.use("/admin",studentDetails);

app.get("/admin/updateDetails",(req,res)=>{
    try{
        res.send("Continue updating Details");
    }
    catch(e){
        res.send("error!!",e);
    }
}); 
app.get("/admin/deleteDetails",(req,res)=>{
    try{
        res.send("Continue deleting Details");
    }
    catch(e){
        res.send("error!!",e);
    }
}); 






app.listen(3000,()=>{
    console.log("listening on port 3000....");
});