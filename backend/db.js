const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://root:root@cluster0.hey4wz1.mongodb.net/inotebook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToMongo;
