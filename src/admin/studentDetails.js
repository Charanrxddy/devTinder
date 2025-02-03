const studentDetails = (req,res,next)=>{
    const token ="xyz";
    if(token != "xyz"){
        res.send("You r not admin,you cannot edit details");
    }
    next();
}

module.exports = {studentDetails};