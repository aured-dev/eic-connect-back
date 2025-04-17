import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Departamento = sequelize.define("Departamento", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
  tableName: "departamento",
  timestamps: false,
  schema: "eic-app", 
});

export default Departamento;