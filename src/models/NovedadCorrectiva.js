import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const NovedadCorrectiva = sequelize.define("NovedadCorrectiva", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  descripcion_novedad: { type: DataTypes.TEXT, allowNull: false },
  actividad_correctiva: { type: DataTypes.TEXT, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  total_insumos: { type: DataTypes.INTEGER },
  detalle_orden_equipo_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "novedad_correctiva",
  timestamps: false,
  schema: "eic-app"
});

export default NovedadCorrectiva;
