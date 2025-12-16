import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';


const port = process.env.PORT;

const inicializing = async() => {
    try {
        await mongoose.connect()
    } catch (error) {
        
    }
}