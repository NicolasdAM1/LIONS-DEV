import express from "express";
import { loginUser } from "../Functions/loginUser.js";
import { AddUser } from "../Functions/addUser.js";
import { authMiddleware } from "../Middlewares/auth-middleware.js";
import { HelloUser } from "../Functions/getUser.js";

export const route = express.Router();

route.post('/login', loginUser)
route.post('/register', AddUser)
route.get('/profile', authMiddleware, HelloUser)
