import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Sucursal = sequelize.define("Sucursal", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ciudad_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
  tableName: "sucursal",
  timestamps: false,
  schema: "eic-app", 
});

export default Sucursal;