import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const TipoUsuario = sequelize.define("TipoUsuario", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    codigo: { type: DataTypes.STRING, allowNull: false },
},
    {
        tableName: "tipo_usuario",
        timestamps: false,
        schema: "eic-app",
    });


export default TipoUsuario;
