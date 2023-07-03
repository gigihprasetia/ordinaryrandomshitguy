import express from "express";
import { GetUser, Auth } from "../controller/usercontroller.js";
import authMiddleware from "../models/middleware/authorization.js";

const Route = express();

Route.get("/users", authMiddleware, GetUser);
Route.get("/auth", Auth.login);

export default Route;
