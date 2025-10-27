import jwt from "jsonwebtoken";

export const Role = {
  USER: 'user',
  ADMIN: 'admin'
};

export function authMiddleware(...allowedRoles){
  return (req, res, next) => {
    const Auth = req.headers.authorization
    if (!Auth) return res.status(401).json({ error: 'Token inválido.' });
    const token = Auth.startsWith('Bearer ') ? Auth.slice(7) : Auth

    try {
      const decoded = jwt.verify(token, process.env.jwstoken);
      req.user = decoded;
      const hasPermission = decoded.role?.some((r) => allowedRoles.includes(r));
      if(!hasPermission){
        return res.status(401).send('Acesso negado.')
      }
      next();

    } catch {
      return res.status(401).json({ error: 'Token inválido' });
    }
  }
}