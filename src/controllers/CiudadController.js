import Ciudad from "../models/ciudad.js";

export const obtenerCiudades = async (req, res) => {
    try {
        const ciudades= await Ciudad.findAll();
        res.json(cargos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los cargos" });
    }
};