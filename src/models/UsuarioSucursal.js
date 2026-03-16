import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UsuarioSucursal = sequelize.define(
    "UsuarioSucursal",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sucursal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "usuario_sucursal",
        timestamps: false,
        schema: "eic-app",
    }
);

export default UsuarioSucursal;