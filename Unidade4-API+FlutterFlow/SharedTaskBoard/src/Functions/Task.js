import { SchemaTaskMGS } from '../Models/SchemaTask.js';

export const createTask = async (req, res) => {
    try {
        const { Description, Board_ID } = req.body;
        const newTask = await SchemaTaskMGS.create({
            Description,
            Board_ID,
            User_ID: req.user.id,
            Status: 'Todo'
        });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateTaskStatus = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { Status } = req.body; 

        const task = await SchemaTaskMGS.findOneAndUpdate(
            { _id: taskId, User_ID: req.user.id },
            { Status },
            { new: true }
        );

        if (!task) return res.status(404).json({ error: "Task not found." });
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}; 