import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const InspeccionComponente = sequelize.define("InspeccionComponente", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    componente_equipo_id: { type: DataTypes.INTEGER, allowNull: false },
    fecha_inspeccion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    observaciones: { type: DataTypes.TEXT },
  }, {
    tableName: "inspeccion_componente",
    timestamps: false,
    schema: "eic-app",
  });
  
  export default InspeccionComponente;