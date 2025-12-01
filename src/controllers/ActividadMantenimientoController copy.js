import ActividadMatenimiento from "../models/ActividadMantenimiento.js";
import { OrdenTrabajo, Usuario } from "../models/index.js";
import { camelToSnake } from "../utils/convertParameters.js";

/*export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) { 
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};
*/

export const crearActividadMantenimiento = async (req, res) => {
  try {

    const { descripcion } = req.body;
    if (!descripcion) {
      return res.status(400).json({ error: "La descripción es obligatoria." });
    }
    const nuevaActividadMatenimiento = await ActividadMatenimiento.create({ descripcion }); 

    res.status(201).json(nuevaActividadMatenimiento);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la actividad', detalles: error.message });
  }
};

export const obtenerActividadesMantenimiento = async (req, res) => {
  try {
    const ordenesDeTrabajo = await ActividadMatenimiento.findAll();
    res.json(ordenesDeTrabajo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cargos" + error });
  }
};


/*/ Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    await usuario.update(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el usuario", detalles: error.message });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    await usuario.destroy();
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
*/