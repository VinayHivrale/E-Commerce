import mongoose from "mongoose";

const mongodbUrl = "mongodb+srv://omhedau01:zw8rbTdi9JU6GPVI@cluster0.azwret0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () =>{
    return mongoose.connect(mongodbUrl);
}  

export {connectDb};