import Cargo from "../models/cargo.js";
import { camelToSnake } from "../utils/convertParameters.js";

// Obtener todos los cargos
export const obtenerCargos = async (req, res) => {
    try {
        const cargos = await Cargo.findAll();
        res.json(cargos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los cargos" });
    }
};

// Crear un nuevo cargo
export const crearCargo = async (req, res) => {
    try {
        const datos = camelToSnake(req.body);
        const nuevocargo = await Cargo.create(datos);
        res.status(201).json(nuevocargo);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el cargo", detalles: error.message });
    }
};

// Obtener un cargo por ID
export const obtenerCargoPorId = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);
        if (!cargo) return res.status(404).json({ error: "cargo no encontrado" });
        res.json(cargo);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el cargo" });
    }
};

// Actualizar un cargo
export const actualizarCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);
        if (!cargo) return res.status(404).json({ error: "cargo no encontrado" });

        await cargo.update(req.body);
        res.json(cargo);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar el cargo", detalles: error.message });
    }
};

// Eliminar un cargo
export const eliminarCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);
        if (!cargo) return res.status(404).json({ error: "cargo no encontrado" });

        await cargo.destroy();
        res.json({ mensaje: "cargo eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el cargo" });
    }
};
