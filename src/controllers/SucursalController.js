import Sucursal from "../models/sucursal.js";
import { camelToSnake } from "../utils/convertParameters.js";

// Obtener todos los sucursals
export const obtenerSucursals = async (req, res) => {
    try {
        const sucursals = await Sucursal.findAll();
        res.json(sucursals);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los sucursals" });
    }
};

// Crear un nuevo sucursal
export const crearSucursal = async (req, res) => {
    try {
        const datos = camelToSnake(req.body);
        const nuevosucursal = await Sucursal.create(datos);
        res.status(201).json(nuevosucursal);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el sucursal", detalles: error.message });
    }
};

// Obtener un sucursal por ID
export const obtenerSucursalPorId = async (req, res) => {
    try {
        const sucursal = await Sucursal.findByPk(req.params.id);
        if (!sucursal) return res.status(404).json({ error: "sucursal no encontrado" });
        res.json(sucursal);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el sucursal" });
    }
};

// Actualizar un sucursal
export const actualizarSucursal = async (req, res) => {
    try {
        const sucursal = await Sucursal.findByPk(req.params.id);
        if (!sucursal) return res.status(404).json({ error: "sucursal no encontrado" });

        await sucursal.update(req.body);
        res.json(sucursal);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar el sucursal", detalles: error.message });
    }
};

// Eliminar un sucursal
export const eliminarSucursal = async (req, res) => {
    try {
        const sucursal = await Sucursal.findByPk(req.params.id);
        if (!sucursal) return res.status(404).json({ error: "sucursal no encontrado" });

        await sucursal.destroy();
        res.json({ mensaje: "sucursal eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el sucursal" });
    }
};
