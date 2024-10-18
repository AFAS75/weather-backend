const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
      return res.status(401).json({ error: 'Access token required' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.status(403).json({ error: 'Invalid access token'});
      req.decoded = decoded;
      next();
    });
  };

  module.exports = { authenticateToken };