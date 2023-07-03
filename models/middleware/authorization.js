import { UserModel } from "../UserModel.js";
import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const value = req.headers.authorization; // Mengambil token dari header permintaan
  if (value === undefined) {
    return res.json({ message: "token is undefined" });
  }
  const token = value.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  //jwt memverivikasi token user
  //   console.log(token);
  jwt.verify(token, "2wsx1qaz", async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const Id = decoded.id;

    await UserModel.findByPk(Id)
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }

        // console.log(user);
        req.user = user; // Menyimpan objek pengguna dalam permintaan untuk digunakan di lapisan selanjutnya
        next();
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
      });
  });
}

export default authMiddleware;
