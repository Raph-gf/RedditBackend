import jwt from "jsonwebtoken";
import "dotenv/config";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Non-Authorized - missing token" });
  }
  jwt.verify(token, process.env.JWT_secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Non-Authorized - Invalid token" });
    }
  });
};
