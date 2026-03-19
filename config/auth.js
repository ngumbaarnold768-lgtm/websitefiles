const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Function to generate JWT token
function generateToken(user) {
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  return token;
}

// Function to verify JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

// Password hashing
async function hashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

// Password verification
async function verifyPassword(password, hash) {
  const match = await bcrypt.compare(password, hash);
  return match;
}

module.exports = { generateToken, verifyToken, hashPassword, verifyPassword };