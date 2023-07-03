import express from "express";
import Databases from "./config/Databases.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Route from "./Route/index.js";
import { assocUserCart } from "./assoc/index.js";

dotenv.config();
const app = express();

(async () => {
  try {
    await Databases.authenticate();
    assocUserCart();
  } catch (error) {
    console.log(error);
  }
})();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Route);

app.listen(process.env.APP_PORT, () => {
  console.log(`server listen on port ${process.env.APP_PORT}`);
});
