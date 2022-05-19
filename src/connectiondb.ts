import { Sequelize } from "sequelize";

const connectWithSequelize: any = new Sequelize("CRUD_Sequelize", "root", "Root@123", {
    dialect: "mysql",
    host: "localhost"
})

export default connectWithSequelize;