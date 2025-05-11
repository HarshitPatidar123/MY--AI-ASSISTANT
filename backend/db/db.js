import mongoose from "mongoose";

function connect() {
    const mongoUrl = process.env.MONGO_URL;
    console.log("Mongo URL:", mongoUrl);  // Check if the URL is printed correctly

    mongoose.connect(mongoUrl)
        .then(() => {
            console.log("Connected to db");
        })
        .catch(err => {
            console.error("Failed to connect to MongoDB:", err);
        });
}

export default connect;
