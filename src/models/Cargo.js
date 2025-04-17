import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Cargo = sequelize.define("Cargo", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },

},
    {
        tableName: "cargo",
        timestamps: false,
        schema: "eic-app",
    }
);


export default Cargo;