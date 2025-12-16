import { SchemaUserMGS } from "../Models/SchemaUser";
import bcrypt from 'bcrypt';

export async function addUser(req, res){
    try {
        const {Name, Email, Password} = req.body;
        const HashPassword = await bcrypt.hash(Password, 12)

        await SchemaUserMGS.create({
            Password: HashPassword
        })
        return res.status(200).send("User signed up.")

    } catch (error) {
        console.error(error)
        return res.status(500).send("Internal error. Please, try again later.")
    }
}