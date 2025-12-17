import express from 'express';
import { register, login } from '../Controller/authController.js';
import { authMiddleware } from '../Middleware/authMiddleware.js';
import { createBoard, getUserBoards } from '../Functions/Board.js';
import { createTask, updateTaskStatus } from '../Functions/Task.js';



export const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: `Welcome User ${req.user.id}` })
})
route.post('/boards', authMiddleware, createBoard);
route.get('/boards', authMiddleware, getUserBoards);
route.post('/tasks', authMiddleware, createTask);
route.patch('/tasks/:taskId', authMiddleware, updateTaskStatus);