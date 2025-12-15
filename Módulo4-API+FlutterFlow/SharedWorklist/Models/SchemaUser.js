import mongoose from "mongoose";
export const SchemaUser = new mongoose.Schema({
  Name: {
    required: true,
    type: String,
  },
  Email: {
    required: true,
    type: String,
    unique: true,
  },
  Password: {
    required: true,
    type: String,
  },
});
export const SchemaUserMGS = mongoose.model("Users", SchemaUser);
