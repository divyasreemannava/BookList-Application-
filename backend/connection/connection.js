const mongoose = require("mongoose");
async function connection(){
    try{
    await mongoose.connect("mongodb+srv://divyasree:divyasree@cluster0.omqdg40.mongodb.net/?retryWrites=true&w=majority")
    console.log("connected to mongodb successfully")
    }catch(err){
        console.log("couldnt connect to mongo db " + err.message
        )
    }
}

module.exports = connection