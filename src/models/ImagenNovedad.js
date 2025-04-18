import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ImagenNovedad = sequelize.define("ImagenNovedad", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  url: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING },
  novedad_correctiva_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "imagen_novedad",
  timestamps: false,
  schema: "eic-app"
});

export default ImagenNovedad;
