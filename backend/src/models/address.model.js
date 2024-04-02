import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    mobile: {
        type: String,
        required: true,
    }
})

const Address = mongoose.model("addresses",AddressSchema);

export {Address};