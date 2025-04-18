import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const MedicionTecnica = sequelize.define("MedicionTecnica", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    inspeccion_componente_id: { type: DataTypes.INTEGER, allowNull: false },
    tipo_medicion: { type: DataTypes.ENUM("amperaje", "voltaje"), allowNull: false },
    subtipo: { type: DataTypes.STRING },
    valor: { type: DataTypes.FLOAT },
  }, {
    tableName: "medicion_tecnica",
    timestamps: false,
    schema: "eic-app",
  });
  
  export default MedicionTecnica;