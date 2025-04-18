import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ImagenEquipo = sequelize.define("ImagenEquipo", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  url: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING },
  detalle_orden_equipo_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "imagen_equipo",
  timestamps: false,
  schema: "eic-app"
});

export default ImagenEquipo;
