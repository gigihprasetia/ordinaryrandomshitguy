import { UserModel, Cart } from "../models/UserModel.js";

export const assocUserCart = () => {
  UserModel.hasOne(Cart, { as: "cart", foreignKey: "cart_user_id" });
  Cart.belongsTo(UserModel, { foreignKey: "cart_user_id" });
};
