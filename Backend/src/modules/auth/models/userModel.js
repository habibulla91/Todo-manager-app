import mongoose from "mongoose";

const user = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxLength: [50, "cannot exceed 50 characters"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim : true,
        lowercase: true,
        match : [/^\S+\@\S+\.\S+$/, "please provide a valid email address"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength : [8, "passwrod should be minimum 8 character"],
    }
});