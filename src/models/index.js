import sequelize from "../config/db.js";

import Equipo from "./Equipo.js";
import Marca from "./Marca.js";
import Modelo from "./Modelo.js";
import Usuario from "./Usuario.js";
import DatosCliente from "./DatosCliente.js";
import ValidacionTecnica from "./ValidacionTecnica.js"
import Sucursal from "./Sucursal.js";
import TipoUsuario from "./TipoUsuario.js";
import Cargo from "./Cargo.js";
import OrdenTrabajo from "./OrdenTrabajo.js";
import DetalleOrdenEquipo from "./DetalleOrdenEquipo.js";
import ComponenteEquipo from "./ComponenteEquipo.js";
import InspeccionComponente from "./InspeccionComponente.js";
import MedicionTecnica from "./MedicionTecnica.js";
import ResultadoValidacion from "./ResultadoValidacion.js";
import ActividadInspeccion from "./ActividadInspeccion.js";
import NovedadCorrectiva from "./NovedadCorrectiva.js";
import InsumoNovedad from "./InsumoNovedad.js";
import ImagenEquipo from "./ImagenEquipo.js";
import ImagenNovedad from "./ImagenNovedad.js";
import Ciudad from "./Ciudad.js";
import Departamento from "./Departamento.js";
import ActividadMantenimiento from "./ActividadMantenimiento.js";
import UsuarioSucursal from "./UsuarioSucursal.js";

// ====================
// Marca, Modelo, Equipo
// ====================
Marca.hasMany(Modelo, { foreignKey: "marca_id", as: "modelos" });
Modelo.belongsTo(Marca, { foreignKey: "marca_id", as: "marca" });

Marca.hasMany(Equipo, { foreignKey: "marca_id", as: "equipos" });
Equipo.belongsTo(Marca, { foreignKey: "marca_id", as: "marca" });

Modelo.hasMany(Equipo, { foreignKey: "modelo_id", as: "equipos" });
Equipo.belongsTo(Modelo, { foreignKey: "modelo_id", as: "modelo" });

// ====================
// Usuario y DatosCliente (1:1)
// ====================
Usuario.hasOne(DatosCliente, { foreignKey: "usuario_id", as: "datosCliente" });
DatosCliente.belongsTo(Usuario, { foreignKey: "usuario_id", as: "usuario" });

// ====================
// Usuario y sus relaciones
// ====================
Usuario.belongsTo(TipoUsuario, { foreignKey: "tipo_usuario_id", as: "tipoUsuario" });
TipoUsuario.hasMany(Usuario, { foreignKey: "tipo_usuario_id", as: "usuarios" });

Usuario.belongsTo(Cargo, { foreignKey: "cargo_id", as: "cargo" });
Cargo.hasMany(Usuario, { foreignKey: "cargo_id", as: "usuarios" });

Usuario.belongsTo(Sucursal, { foreignKey: "sucursal_id", as: "sucursal" });
Sucursal.hasMany(Usuario, { foreignKey: "sucursal_id", as: "usuarios" });

// ====================
// Sucursal, Ciudad, Departamento
// ====================
Sucursal.belongsTo(Ciudad, { foreignKey: "ciudad_id", as: "ciudad" });
Ciudad.hasMany(Sucursal, { foreignKey: "ciudad_id", as: "sucursales" });

Ciudad.belongsTo(Departamento, { foreignKey: "departamento_id", as: "departamento" });
Departamento.hasMany(Ciudad, { foreignKey: "departamento_id", as: "ciudades" });

// ====================
// OrdenTrabajo y Detalles
// ====================
OrdenTrabajo.belongsTo(Usuario, { foreignKey: "cliente_id", as: "cliente" });
OrdenTrabajo.belongsTo(Usuario, { foreignKey: "tecnico_id", as: "tecnico" });
OrdenTrabajo.belongsTo(Usuario, { foreignKey: "registrador_id", as: "registrador" });

OrdenTrabajo.hasMany(DetalleOrdenEquipo, { foreignKey: "orden_trabajo_id", as: "detalles" });
DetalleOrdenEquipo.belongsTo(OrdenTrabajo, { foreignKey: "orden_trabajo_id", as: "ordenTrabajo" });

DetalleOrdenEquipo.belongsTo(Equipo, { foreignKey: "equipo_id", as: "equipo" });

// ====================
// Componentes e Inspecciones
// ====================
Equipo.hasMany(ComponenteEquipo, { foreignKey: "equipo_id", as: "componentes" });
ComponenteEquipo.belongsTo(Equipo, { foreignKey: "equipo_id", as: "equipo" });

ComponenteEquipo.hasMany(InspeccionComponente, { foreignKey: "componente_equipo_id", as: "inspecciones" });
InspeccionComponente.belongsTo(ComponenteEquipo, { foreignKey: "componente_equipo_id", as: "componente" });

InspeccionComponente.hasMany(MedicionTecnica, { foreignKey: "inspeccion_componente_id", as: "mediciones" });
InspeccionComponente.hasMany(ResultadoValidacion, { foreignKey: "inspeccion_componente_id", as: "resultadosValidacion" });
InspeccionComponente.hasMany(ActividadInspeccion, { foreignKey: "inspeccion_componente_id", as: "actividades" });

ResultadoValidacion.belongsTo(ValidacionTecnica, { foreignKey: "validacion_tecnica_id", as: "validacion" });

// ====================
// Novedades Correctivas
// ====================
DetalleOrdenEquipo.hasMany(NovedadCorrectiva, { foreignKey: "detalle_orden_equipo_id", as: "novedades" });
NovedadCorrectiva.belongsTo(DetalleOrdenEquipo, { foreignKey: "detalle_orden_equipo_id", as: "detalle" });

// Insumos
NovedadCorrectiva.hasMany(InsumoNovedad, { foreignKey: "novedad_correctiva_id", as: "insumos" });
InsumoNovedad.belongsTo(NovedadCorrectiva, { foreignKey: "novedad_correctiva_id", as: "novedad" });

// ====================
// Imágenes
// ====================
DetalleOrdenEquipo.hasMany(ImagenEquipo, { foreignKey: "detalle_orden_equipo_id", as: "imagenesEquipo" });
ImagenEquipo.belongsTo(DetalleOrdenEquipo, { foreignKey: "detalle_orden_equipo_id", as: "detalle" });

NovedadCorrectiva.hasMany(ImagenNovedad, { foreignKey: "novedad_correctiva_id", as: "imagenesNovedad" });
ImagenNovedad.belongsTo(NovedadCorrectiva, { foreignKey: "novedad_correctiva_id", as: "novedad" });

// ====================
// Equipos por cliente
// ====================
Equipo.belongsTo(Usuario, { foreignKey: "cliente_id", as: "cliente" });
Usuario.hasMany(Equipo, { foreignKey: "cliente_id", as: "equipos" });


Usuario.belongsToMany(Sucursal, {
  through: UsuarioSucursal,
  foreignKey: "usuario_id",
  otherKey: "sucursal_id",
});

Sucursal.belongsToMany(Usuario, {
  through: UsuarioSucursal,
  foreignKey: "sucursal_id",
  otherKey: "usuario_id",
});

Sucursal.belongsTo(Ciudad, { foreignKey: "ciudad_id" });
Ciudad.hasMany(Sucursal, { foreignKey: "ciudad_id" });

OrdenTrabajo.belongsTo(Sucursal, {
  foreignKey: "sucursal_id",
  as: "sucursal"
});

Sucursal.hasMany(OrdenTrabajo, {
  foreignKey: "sucursal_id",
  as: "ordenes"
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
  Cargo,
  OrdenTrabajo,
  DetalleOrdenEquipo,
  ComponenteEquipo,
  InspeccionComponente,
  MedicionTecnica,
  ResultadoValidacion,
  ActividadInspeccion,
  ImagenNovedad,
  ImagenEquipo,
  InsumoNovedad,
  NovedadCorrectiva,
  ActividadMantenimiento
};


