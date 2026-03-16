import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

import Marca from "./Marca.js"; 
import Modelo from "./Modelo.js"; 

const Equipo = sequelize.define("Equipo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  serial: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  modelo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  marca_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  capacidad: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.ENUM("activo", "inactivo"),
    allowNull: false,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sucursal_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  tableName: "equipo",
  timestamps: false,
  schema: "eic-app", 
}
);

// Asociación entre Equipo y Marca
Equipo.belongsTo(Marca, { foreignKey: "marca_id" });

// Asociación entre Equipo y Modelo
Equipo.belongsTo(Modelo, { foreignKey: "modelo_id" });

export default Equipo;

