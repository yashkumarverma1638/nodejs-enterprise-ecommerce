import jwt from "jsonwebtoken";

const JWT_SECRET = "super-secret-key";

export const generateAccessToken = (userId: string, email: string) => {
  return jwt.sign(
    {
      userId,
      email,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
