const express = require("express");
const app = express();

const {connectDb} = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.patch("/users", async (req, res) => {
    try {
        const userId = req.body._id; // Get ID from URL parameter
        const data = req.body; // Get update data from request body

        // Find and update the user
        const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
});


app.get("/patch",async (req,res)=>{
    try{
        const allUsers = await User.find({});
        console.log(allUsers);
        if (allUsers){
            res.send(allUsers);
        }
        else{
            res.send("No Users Here")
        }
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
});

app.delete("/users", async (req, res) => {
    try {
        const userId = req.body._id; // Extract user ID from URL parameters
        console.log("Deleting user with ID:", userId); // Log the user ID

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

app.get("/users",async (req,res)=>{
    try{
        const email = req.body.emailId;
        const findUserDetails = await User.find({emailId:email});
        if (findUserDetails.length === 0){
            res.send("No user found");
        } 
        else{
            res.send(findUserDetails);
        } 
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
})

app.post("/users",async (req,res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.send("posted successfully");
    }
    catch(error){
        res.status(500).send({ message: "Something went wrong", error: error.message });
    }
});



connectDb()
    .then(()=>{
        console.log("connected to database");
        app.listen(3000,()=>{
            console.log("listening on port 3000....");
        });
    })
    .catch((e)=>{
        console.log("database cannot be connected");
    })



