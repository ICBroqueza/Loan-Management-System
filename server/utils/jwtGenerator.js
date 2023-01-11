import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateJWT = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '6h' });
};

export { generateJWT };
