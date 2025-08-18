import TipoUsuario from "../models/TipoUsuario.js";
import { camelToSnake } from "../utils/convertParameters.js";

// Obtener todos los usuarios
export const obtenerTipoUsuarios = async (req, res) => {
  try {
    const tiposUsuarios = await TipoUsuario.findAll();
    res.json(tiposUsuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los tipos de usuario" });
  }
};

export const crearTipoUsuario = async (req, res) => {
  try {
    const datos = camelToSnake(req.body);
    const nuevoTipoUsuario = await TipoUsuario.create(datos);
    res.status(201).json(nuevoTipoUsuario);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el usuario", detalles: error.message });
  }
};

export const obtenerTipoUsuarioPorId = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findByPk(req.params.id);
    if (!tipoUsuario) return res.status(404).json({ error: "tipo de usuario no encontrado" });
    res.json(tipoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el tipo de usuario" });
  }
};

export const actualizarTipoUsuario = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findByPk(req.params.id);
    if (!tipoUsuario) return res.status(404).json({ error: "Tipo de usuario no encontrado" });

    await tipoUsuario.update(req.body);
    res.json(tipoUsuario);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el tipo de usuario", detalles: error.message });
  }
};

export const eliminarTipoUsuario = async (req, res) => {
  try {
    const tipoUsuario = await TipoUsuario.findByPk(req.params.id);
    if (!tipoUsuario) return res.status(404).json({ error: "Tipo de usuario no encontrado" });

    await tipoUsuario.destroy();
    res.json({ mensaje: "tipo de usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el tipo de usuario" });
  }
};
