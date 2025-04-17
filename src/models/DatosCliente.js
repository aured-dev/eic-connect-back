import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js";


const DatosCliente = sequelize.define(
  "DatosCliente",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id",
      },
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "datos_cliente",
    timestamps: false,
    schema: "eic-app", 
  }
);

export default DatosCliente;
