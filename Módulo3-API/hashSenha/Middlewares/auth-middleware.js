import jwt from "jsonwebtoken";


export function authMiddleware(req, res, next){
    const token = req.headers.authorization
    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, process.env.jwstoken);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}