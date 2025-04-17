import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Marca = sequelize.define("Marca", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "marca",
  timestamps: false,
  schema: "eic-app", 
});

export default Marca;

  