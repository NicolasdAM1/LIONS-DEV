export function HelloUser (req, res) {
    res.status(200).json({ message: `Bem-vindo(a)! Teu ID é ${req.user.userId}` });
  };