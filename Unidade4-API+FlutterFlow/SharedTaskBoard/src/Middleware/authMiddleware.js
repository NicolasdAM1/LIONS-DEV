import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if(!token) 
        return res.status(401).json({ error: 'No token. Authhorization Denied.' });

    try {
        const decoded = jwt.verify(token, process.env.JWST);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: "Token is not valid." });
    }
}