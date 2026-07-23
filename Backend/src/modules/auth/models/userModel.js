import mongoose from "mongoose";
import { validation } from './../../../shared/constants.js';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxLength: [validation.nameMaxLength, "cannot exceed 50 characters"],
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
        minLength : [validation.passwordMinLength, `passwrod should be minimum ${validation.passwordMinLength} character`],
        select : false,
    },
}, {
    timestamps : false,
    versionKey : false,
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);