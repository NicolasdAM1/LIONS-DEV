import jwt from "jsonwebtoken";


export function authMiddleware(req, res, next){
    const Auth = req.headers.authorization
    if (!Auth) return res.status(401).json({ error: 'Token não fornecido' });
    const token = Auth.startsWith('Bearer ') ? Auth.slice(7) : Auth

  try {
    const decoded = jwt.verify(token, process.env.jwstoken);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}