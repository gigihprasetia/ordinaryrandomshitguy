import { Sequelize } from "sequelize";

const Databases = new Sequelize("database", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

export default Databases;
