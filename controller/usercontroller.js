import { UserModel, Cart } from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const GetUser = async (req, res) => {
  // console.log(req);
  try {
    const response = await UserModel.findAll({
      include: {
        model: Cart,
        as: "cart",
      },
    });
    res.json(response);
  } catch (error) {
    // console.log(error);
    res.json({ message: error });
  }
};

export const Auth = {
  login: async (req, res) => {
    const { username } = req.body;
    const { password } = req.body;

    try {
      const response = await UserModel.findOne({
        where: {
          username,
          password,
        },
      });
      const id = response.id;

      const token = await jwt.sign({ id }, "2wsx1qaz");

      res.json({ data: response, token });
    } catch (error) {
      console.log(error);
    }
  },
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const response = await UserModel.create(
        {
          username,
          password,
          Cart: {
            cart_name: username,
          },
        },
        {
          include: Cart,
        }
      );

      // console.log();
      res.json("sucess created");
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
};
