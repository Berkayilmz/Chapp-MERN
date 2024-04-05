const mongoose = require("mongoose");

const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MongoDBURI);
        console.log('Connected to MONGODB')
    } catch (error) {
        console.log('Error connecting to MONGODB',error)
    }
}

module.exports=connectToMongoDB