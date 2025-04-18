import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ComponenteEquipo = sequelize.define("ComponenteEquipo", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    detalle_orden_equipo_id: { type: DataTypes.INTEGER, allowNull: false },
    tipo: { type: DataTypes.ENUM("condensadora", "evaporadora"), allowNull: false },
    modelo: { type: DataTypes.STRING },
    serial: { type: DataTypes.STRING },
  }, {
    tableName: "componente_equipo",
    timestamps: false,
    schema: "eic-app",
  });
  
  export default ComponenteEquipo;