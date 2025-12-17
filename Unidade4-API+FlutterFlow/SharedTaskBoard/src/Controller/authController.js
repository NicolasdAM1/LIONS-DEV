import { SchemaUserMGS } from "../Models/SchemaUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            Name,
            Email,
            Password: hashedPassword,
        });
        res.status(201).json({ message: "User created successfully. "});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        const user = await User.findOne({ Email }).select("+Password");
        if(!user) return res.status(404).json({ error: "USer not found." });

        const isMatch = await bcrypt.compare(Password, user.Password);
        if(!isMatch) return res.status(401).json({ error: "Invalid credentials." });

        const token = jwt({ id: user._ID }, process.env.JWST, { expiresIn: '6h' });

        res.json({ token, user: { id: user._ID, Name: user.Name } })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}