import Equipo from "../models/Equipo.js";
import { camelToSnake } from "../utils/convertParameters.js";

// Obtener todos los equipos
export const obtenerEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.findAll();
    res.json(equipos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los equipos" });
  }
};

// Crear nuevo equipo
export const crearEquipo = async (req, res) => {
  try {
    const datos = camelToSnake(req.body); // Convertir keys si vienen en camelCase
    const nuevoEquipo = await Equipo.create(datos);
    res.status(201).json(nuevoEquipo);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el equipo", detalles: error.message });
  }
};

// Obtener equipo por ID
export const obtenerEquipoPorId = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ error: "Equipo no encontrado" });
    res.json(equipo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el equipo" });
  }
};

// Actualizar equipo
export const actualizarEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ error: "Equipo no encontrado" });

    await equipo.update(req.body);
    res.json(equipo);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el equipo", detalles: error.message });
  }
};

// Eliminar equipo
export const eliminarEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ error: "Equipo no encontrado" });

    await equipo.destroy();
    res.json({ mensaje: "Equipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el equipo" });
  }
};
