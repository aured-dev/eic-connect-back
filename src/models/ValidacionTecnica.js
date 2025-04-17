import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ValidacionTecnica = sequelize.define("ValidacionTecnica", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "validacion_tecnica",
  timestamps: false,
  schema: "eic-app", 
});

export default ValidacionTecnica;
