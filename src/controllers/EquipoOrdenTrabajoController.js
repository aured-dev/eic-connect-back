import { DetalleOrdenEquipo } from "../models/index.js";
import { camelToSnake } from "../utils/convertParameters.js";
import sharp from "sharp";
import fs from "fs";
import path from "path";

/*export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};
*/

export const creaEquiporOrdenTrabajo = async (req, res) => {
  try {
    console.log(req.body.datosEquipo);
    const datos = camelToSnake(req.body.datosEquipo);
    console.log(datos)
    const nuevaEquipoOrdenTrabajo = await DetalleOrdenEquipo.create(datos);

    res.status(201).json(nuevaEquipoOrdenTrabajo);
  } catch (error) {
    // Manejo de errores
    res.status(400).json({ error: 'Error al crear la relacion de equipo orden de trabajo', detalles: error.message });
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