import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const mongodbUrl = process.env.MONGODB_URL;

const connectDb = () => {
    return mongoose.connect(mongodbUrl);
};

export { connectDb };
