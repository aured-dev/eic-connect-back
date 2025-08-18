import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ActividadMatenimiento = sequelize.define("ActividadMantenimiento", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    descripcion: { type: DataTypes.TEXT },
    
}, {
    tableName: "actividad_mantenimiento",
    timestamps: false,
    schema: "eic-app",
});

export default ActividadMatenimiento;