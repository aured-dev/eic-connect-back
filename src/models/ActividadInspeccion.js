import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ActividadInspeccion = sequelize.define("ActividadInspeccion", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    inspeccion_componente_id: { type: DataTypes.INTEGER, allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    realizada: { type: DataTypes.BOOLEAN },
    observaciones: { type: DataTypes.TEXT },
  }, {
    tableName: "actividad_inspeccion",
    timestamps: false,
    schema: "eic-app",
  });
  
  export default ActividadInspeccion;