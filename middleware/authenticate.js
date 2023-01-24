import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  const secret = "my-secret"
  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token." });
    }

    req.email = decoded;
    next();
  });
};

export default authenticate;
