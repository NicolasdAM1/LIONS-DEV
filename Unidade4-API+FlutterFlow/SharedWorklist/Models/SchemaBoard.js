import mongoose from 'mongoose';
export const SchemaBoard = new mongoose.Schema({
    Title: {
        type: String,
    },
    User_ID: {
        type: String,
        required: true,
    },
})
export const SchemaBoardMGS = mongoose.model("Boards", SchemaBoard);