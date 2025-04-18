import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const InsumoNovedad = sequelize.define("InsumoNovedad", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  descripcion: { type: DataTypes.STRING, allowNull: false },
  unidad_medida: { type: DataTypes.STRING },
  cantidad: { type: DataTypes.INTEGER },
  observaciones: { type: DataTypes.STRING },
  novedad_correctiva_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "insumo_novedad",
  timestamps: false,
  schema: "eic-app"
});

export default InsumoNovedad;
