import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrdenTrabajo = sequelize.define("OrdenTrabajo", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cliente_id: { type: DataTypes.INTEGER, allowNull: false },
    sucursal_id: { type: DataTypes.INTEGER, allowNull: true },
    tecnico_id: { type: DataTypes.INTEGER, allowNull: false },
    registrador_id: { type: DataTypes.INTEGER, allowNull: false },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    estado: { type: DataTypes.STRING },
    observaciones: { type: DataTypes.TEXT },
    tipo: { type: DataTypes.STRING },
}, {
    tableName: "orden_trabajo",
    timestamps: false,
    schema: "eic-app",
});

export default OrdenTrabajo;