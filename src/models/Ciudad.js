import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Ciudad = sequelize.define("Ciudad", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}
,
  {
    tableName: "ciudad",
    timestamps: false,
    schema: "eic-app", 
  });

export default Ciudad;
