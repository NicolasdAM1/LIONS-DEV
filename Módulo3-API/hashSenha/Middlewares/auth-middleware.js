const jwt = require("jsonwebtoken");

export function authMiddleware(req, res, next){
    const token = req.headers.authorization
    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token,'36c5e560ecb4d0cac76541eb981301959079c85277db27f5da9e1357102f7468' );
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}