import mongoose from "mongoose";
export const SchemaTask = new mongoose.Schema({
    Description: {
        required: true,
        type: String,
    },
    Board_ID: {
        type: String,
        required: true,
    },
    User_ID: {
        type: String,
        required: true,
    },
    Status: {
        required: true,
        type: String,
        enum: ['Todo', 'Done'],
    }
})
export const SchemaTaskMGS = mongoose.model("Tasks", SchemaTask);