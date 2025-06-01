import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},
    { timestamps: true });
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
export type UserType = {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
} 