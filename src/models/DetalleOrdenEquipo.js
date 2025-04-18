import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const DetalleOrdenEquipo = sequelize.define("DetalleOrdenEquipo", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    orden_trabajo_id: { type: DataTypes.INTEGER, allowNull: false },
    equipo_id: { type: DataTypes.INTEGER, allowNull: false },
    ubicacion_equipo: { type: DataTypes.STRING },
  }, {
    tableName: "detalle_orden_equipo",
    timestamps: false,
    schema: "eic-app",
  });
  
  export default DetalleOrdenEquipo;