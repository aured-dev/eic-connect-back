import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

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
  }
}, {
  tableName: "equipo",
  timestamps: false,
  schema: "eic-app", 
}
);

export default Equipo;

