import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(403).json({ err: 'Invalid Token' });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;

      next();
    });
  } catch (error) {
    res.status(401).json({ err: error.message });
  }
};

export { auth };
