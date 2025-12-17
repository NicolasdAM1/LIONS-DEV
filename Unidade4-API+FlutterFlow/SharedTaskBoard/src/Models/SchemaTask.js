import mongoose from "mongoose";
export const SchemaTask = new mongoose.Schema({
    Description: {
        required: [true, "A task description is required."],
        type: String,
        trim: true,
    },
    Board_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Boards",
        required: true,
    },
    User_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    Status: {
        required: true,
        type: String,
        enum: ['Todo', 'Done'],
        default: 'Todo',
    },
}, {
    timestamps: true,
})
export const SchemaTaskMGS = mongoose.model("Tasks", SchemaTask);