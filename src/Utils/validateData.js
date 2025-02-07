const validator = require("validator");

const validateData = (req)=>{
    const {firstName,lastName,emailId,password} = req.body;

    if (!firstName || !lastName){
        throw new Error("not a valid name");
    }
    else if(firstName.length<4 || firstName.length>50){
        throw new Error("not a valid name");
    }

    else if(!validator.isEmail(emailId)){
        throw new Error("not a valid email");
    }
    }    
module.exports = {validateData}