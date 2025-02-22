const mongoose = require("mongoose");
var validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true,
        minLength : 4,
        maxLength : 50,
        
    },
    lastName: {
        type: String,
    
    },
    emailId: {
        type: String,
        required : true,
        unique : true,
        lowercase:true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not a valid email");
            }
        }
    },
    password: {
        type : String,
        required : true
    },
    age: {
        type: Number,
        min : 18
        
    },
    gender: {
        type: String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender is invalid");
            }
        }
    },
    about:{
        type : String,
        default:"This is a default value",
    }
},{
    timestamps : true
});

module.exports = mongoose.model('User', userSchema);