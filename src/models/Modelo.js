import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Marca from "./Marca.js";

const Modelo = sequelize.define("Modelo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  marca_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "modelo",
  timestamps: false,
  schema: "eic-app", 
});

Modelo.belongsTo(Marca, { foreignKey: "marca_id" }); // Asociación directa

export default Modelo;
