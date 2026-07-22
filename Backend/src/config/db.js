import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if(mongoose.connection.readyState >=1) return;
        const connectionDb =await mongoose.connect(process.env.MONGODB_URI);
        console.log(connectionDb.connection.host);
    } catch (error) {
        console.error(`mongoDb connected error ${error.message}`);
        throw error;
    }
}