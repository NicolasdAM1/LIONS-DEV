export function HelloUser (req, res) {
    res.json({ message: `Bem-vindo(a)! Teu ID é ${req.user.userId}` });
  };