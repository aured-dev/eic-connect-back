import { Ciudad } from "../models/index.js";


export const obtenerCiudades = async (req, res) => {
    try {
        const ciudades= await Ciudad.findAll();
        res.json(ciudades);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ciudades" });
    }
};