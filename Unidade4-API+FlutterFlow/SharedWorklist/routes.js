import express from 'express';
import { loginUser } from './Functions/loginUser.js';
import { addUser } from './Functions/addUser.js';


export const route = express.Router();

route.post('/login', loginUser);
route.post('/register', addUser);
