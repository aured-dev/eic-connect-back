import Marca from "../models/Marca.js";

// Obtener todas las marcas
export const obtenerMarcas = async (req, res) => {
  try {
    const marcas = await Marca.findAll();
    res.json(marcas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las marcas" });
  }
};

// Crear nueva marca
export const crearMarca = async (req, res) => {
  try {
    const { descripcion } = req.body;
    if (!descripcion) {
      return res.status(400).json({ error: "La descripción es obligatoria." });
    }
    const nuevaMarca = await Marca.create({ descripcion }); 
    res.status(201).json(nuevaMarca);
  } catch (error) {
    res.status(400).json({
      error: "Error al crear la marca",
      detalles: error.message
    });
  }
};

// Obtener marca por ID
export const obtenerMarcaPorId = async (req, res) => {
  try {
    const marca = await Marca.findByPk(req.params.id);
    if (!marca) return res.status(404).json({ error: "Marca no encontrada" });
    res.json(marca);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la marca" });
  }
};

// Actualizar marca
export const actualizarMarca = async (req, res) => {
  try {
    const marca = await Marca.findByPk(req.params.id);
    if (!marca) return res.status(404).json({ error: "Marca no encontrada" });

    await marca.update(req.body);
    res.json(marca);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la marca", detalles: error.message });
  }
};

// Eliminar marca
export const eliminarMarca = async (req, res) => {
  try {
    const marca = await Marca.findByPk(req.params.id);
    if (!marca) return res.status(404).json({ error: "Marca no encontrada" });

    await marca.destroy();
    res.json({ mensaje: "Marca eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la marca" });
  }
};
