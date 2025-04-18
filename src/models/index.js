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
Usuario.belongsTo(TipoUsuario, {foreignKey: "tipo_usuario_id", as: "tipoUsuario",});
Usuario.belongsTo(Cargo, {foreignKey: "cargo_id", as: "cargo",});
Usuario.belongsTo(Sucursal, {foreignKey: "sucursal_id", as: "sucursal",});

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


//Relaciones orden de trabajo

OrdenTrabajo.belongsTo(Usuario, { foreignKey: 'cliente_id', as: 'cliente' });
OrdenTrabajo.belongsTo(Usuario, { foreignKey: 'tecnico_id', as: 'tecnico' });
OrdenTrabajo.belongsTo(Usuario, { foreignKey: 'registrador_id', as: 'registrador' });

OrdenTrabajo.hasMany(DetalleOrdenEquipo, { foreignKey: 'orden_trabajo_id' });
DetalleOrdenEquipo.belongsTo(OrdenTrabajo, { foreignKey: 'orden_trabajo_id' });

DetalleOrdenEquipo.belongsTo(Equipo, { foreignKey: 'equipo_id' });
DetalleOrdenEquipo.hasMany(ComponenteEquipo, { foreignKey: 'detalle_orden_equipo_id' });

ComponenteEquipo.hasMany(InspeccionComponente, { foreignKey: 'componente_equipo_id' });
InspeccionComponente.belongsTo(ComponenteEquipo, { foreignKey: 'componente_equipo_id' });

InspeccionComponente.hasMany(MedicionTecnica, { foreignKey: 'inspeccion_componente_id' });
InspeccionComponente.hasMany(ResultadoValidacion, { foreignKey: 'inspeccion_componente_id' });
InspeccionComponente.hasMany(ActividadInspeccion, { foreignKey: 'inspeccion_componente_id' });

ResultadoValidacion.belongsTo(ValidacionTecnica, { foreignKey: 'validacion_tecnica_id' });

// NovedadCorrectiva pertenece a un DetalleOrdenEquipo
DetalleOrdenEquipo.hasMany(NovedadCorrectiva, {
  foreignKey: "detalle_orden_equipo_id",
  as: "novedades"
});
NovedadCorrectiva.belongsTo(DetalleOrdenEquipo, {
  foreignKey: "detalle_orden_equipo_id"
});

// Insumos pertenecen a NovedadCorrectiva
NovedadCorrectiva.hasMany(InsumoNovedad, {
  foreignKey: "novedad_correctiva_id",
  as: "insumos"
});
InsumoNovedad.belongsTo(NovedadCorrectiva, {
  foreignKey: "novedad_correctiva_id"
});

// Imagenes del equipo por detalle
DetalleOrdenEquipo.hasMany(ImagenEquipo, {
  foreignKey: "detalle_orden_equipo_id",
  as: "imagenes_equipo"
});
ImagenEquipo.belongsTo(DetalleOrdenEquipo, {
  foreignKey: "detalle_orden_equipo_id"
});

// Imagenes de las novedades
NovedadCorrectiva.hasMany(ImagenNovedad, {
  foreignKey: "novedad_correctiva_id",
  as: "imagenes_novedad"
});
ImagenNovedad.belongsTo(NovedadCorrectiva, {
  foreignKey: "novedad_correctiva_id"
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
};


