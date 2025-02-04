const mongoose = require("mongoose");
const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://gopicharanreddygangula:2UYkbXRUnEuSsl64@charanreddy.an5rc.mongodb.net/devTinder");
};

module.exports = {connectDb}; 