import mongoose from 'mongoose';
export const SchemaBoard = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "A board title is required."],
        trim: true,
    },
    User_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
}, {
    timestamps: true,
})
export const SchemaBoardMGS = mongoose.model("Boards", SchemaBoard);