const studentDetails = (req,res,next)=>{
    try{
        const token ="xyz";
        if(token != "xyz"){
            res.send("You r not admin,you cannot edit details");
        }
        throw new Error("fghj")
        next();
    }
    catch(e){
        res.send("error");
    }
}

module.exports = {studentDetails};