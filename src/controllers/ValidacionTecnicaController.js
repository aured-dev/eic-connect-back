import {ValidacionTecnica } from "../models/index.js";


export const crearValidacionTecnica = async (req, res) => {
  try {

    const { descripcion } = req.body;
    if (!descripcion) {
      return res.status(400).json({ error: "La descripción es obligatoria." });
    }
    const nuevaValidacionTecnica = await ValidacionTecnica.create({ descripcion }); 

    res.status(201).json(nuevaValidacionTecnica);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la actividad', detalles: error.message });
  }
};

export const obtenerValidacionesTecnicas = async (req, res) => {
  try {
    const validacionesTecnicas = await ValidacionTecnica.findAll();
    res.json(validacionesTecnicas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cargos" + error });
  }
};