import { SchemaBoardMGS } from "../Models/SchemaBoard.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { SchemaUserMGS } from "../Models/SchemaUser.js";

export async function loginUser(req, res) {
  try {
    const {Name, Email, Password} = req.body;
    const user = await SchemaUserMGS.findOne({Email})
    if(!user) return res.status(404).json({error: 'User not found.'})

    const validPassword = await bcrypt.compare(Password, user.Password)
    if(!user) return res.status(401).json({error: 'Incorrect password.'})

        const secret = process.env.jwstoken
        const token = jwt.sign({user_ID: user._id}, secret, {expiresIn: '1h'});

        res.json({message: "Login successfully done.", token})
  } catch (error) {
    console.log(error)
    return res.status(500).send("Login failed. Try again later.")
  }
}
