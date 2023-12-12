import mongoose from "mongoose";

let isConnceted = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);
    if(isConnceted){
        console.log('Mongo DB IS CONNECTED');
        ReturnDocument;
    }
    try{
        await mongoose.connect(process.env.MOGODB_URI)
    }
    catch (err) {
        console.log("Error while connecting with db",err);
    }
}