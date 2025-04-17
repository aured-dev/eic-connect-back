import sequelize from "../config/db.js";

import Equipo from "./Equipo.js";
import Marca from "./Marca.js";
import Modelo from "./Modelo.js";
import Usuario from "./Usuario.js";
import DatosCliente from "./DatosCliente.js";
import ValidacionTecnica from "./ValidacionTecnica.js"
import Ciudad from "./ciudad.js";
import Sucursal from "./sucursal.js";
import Departamento from "./departamento.js";
import TipoUsuario from "./tipousuario.js";
import Cargo from "./cargo.js";

// Asociaciones entre Marca, Modelo y Equipo
Marca.hasMany(Modelo, { foreignKey: "marca_id" });
Modelo.belongsTo(Marca, { foreignKey: "marca_id" });

Marca.hasMany(Equipo, { foreignKey: "marca_id" });
Modelo.hasMany(Equipo, { foreignKey: "modelo_id" });
Equipo.belongsTo(Marca, { foreignKey: "marca_id" });
Equipo.belongsTo(Modelo, { foreignKey: "modelo_id" });

// Asociación Usuario <-> DatosCliente (1:1)
Usuario.hasOne(DatosCliente, { foreignKey: "usuario_id" });
DatosCliente.belongsTo(Usuario, { foreignKey: "usuario_id" });

//asociaciones tabla usuario
Usuario.belongsTo(TipoUsuario, {
    foreignKey: "tipo_usuario_id",
    as: "tipoUsuario",
  });

  Usuario.belongsTo(Cargo, {
    foreignKey: "cargo_id",
    as: "cargo",
  });

  Usuario.belongsTo(Sucursal, {
    foreignKey: "sucursal_id",
    as: "sucursal",
  });

  TipoUsuario.hasMany(Usuario, {
    foreignKey: "tipo_usuario_id",
    as: "usuarios",
});
Cargo.hasMany(Usuario, { foreignKey: "cargo_id", as: "usuarios" });
Sucursal.hasMany(Usuario, { foreignKey: "sucursal_id", as: "usuarios" });


Sucursal.belongsTo(Ciudad, { foreignKey: "ciudad_id", as: "ciudad" });
Ciudad.hasMany(Sucursal, { foreignKey: "ciudad_id", as: "sucursales" });



Ciudad.belongsTo(Departamento, {
    foreignKey: "departamento_id",
    as: "departamento",
});

Departamento.hasMany(Ciudad, {
    foreignKey: "departamento_id",
    as: "ciudades",
});



// Exportar todos los modelos y sequelize
export {
    sequelize,
    Equipo,
    Marca,
    Modelo,
    Usuario,
    DatosCliente,
    ValidacionTecnica,
    Sucursal,
    Ciudad,
    Departamento, 
    TipoUsuario,
    Cargo
};


