import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identificacion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tipo_identificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    tipo_usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cargo_id: {
      type: DataTypes.INTEGER,  
      allowNull: false,
    },
    sucursal_id: {
      type: DataTypes.INTEGER,
    },
    imagen: {
      type: DataTypes.TEXT, // en lugar de DataTypes.BLOB
      allowNull: true
    },
  },
  {
    tableName: "usuario",
    timestamps: false,
    schema: "eic-app", 
  }
);

export default Usuario;
