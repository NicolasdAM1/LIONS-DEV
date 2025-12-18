import { SchemaBoardMGS } from "../Models/SchemaBoard.js"; 

export const createBoard = async (req, res) => {
    try {
        const { Title } = req.body
        const newBoard = await SchemaBoardMGS.create({
            Title,
            User_ID: req.user.id
        });
        res.status(201).json(newBoard)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export const getUserBoards = async (req, res) => {
    try {
        const boards = await SchemaBoardMGS.find({ User_ID: req.user.id })
        res.json(boards)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}