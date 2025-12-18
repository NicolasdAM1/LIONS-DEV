import mongoose from "mongoose";
export const SchemaUser = new mongoose.Schema({
  Name: {
    required: [true, "Name is required."],
    type: String,
    trim: true,
  },
  Email: {
    required: [true, "Email is required."],
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  Password: {
    required: [true, "Password is required."],
    type: String,
    select: false,
  },
}, {
  timestamps: true,
});
export const SchemaUserMGS = mongoose.model("Users", SchemaUser); 
