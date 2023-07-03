import { DataTypes, Sequelize } from "sequelize";
import Databases from "../config/Databases.js";

export const UserModel = Databases.define(
  "User",
  {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      values: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export const Cart = Databases.define(
  "Cart",
  {
    cart_id: {
      allowNull: false,
      type: DataTypes.UUID,
      values: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    cart_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
