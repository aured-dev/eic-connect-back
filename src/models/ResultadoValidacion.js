import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ResultadoValidacion = sequelize.define("ResultadoValidacion", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    inspeccion_componente_id: { type: DataTypes.INTEGER, allowNull: false },
    validacion_tecnica_id: { type: DataTypes.INTEGER, allowNull: false },
    estado: { type: DataTypes.STRING },
    observaciones: { type: DataTypes.TEXT },
  }, {
    tableName: "resultado_validacion",
    timestamps: false,
    schema: "eic-app",
  });
  
  export default ResultadoValidacion;