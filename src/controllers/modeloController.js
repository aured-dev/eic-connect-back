import Modelo from "../models/Modelo.js";
import Marca from "../models/Marca.js";

// Obtener todos los modelos
export const obtenerModelos = async (req, res) => {
  try {
    const modelos = await Modelo.findAll();
    res.json(modelos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los modelos" });
  }
};

// Crear nuevo modelo
export const crearModelo = async (req, res) => {
  try {
    const nuevoModelo = await Modelo.create(req.body);
    res.status(201).json(nuevoModelo);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el modelo", detalles: error.message });
  }
};

// Obtener modelo por ID
export const obtenerModeloPorId = async (req, res) => {
  try {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).json({ error: "Modelo no encontrado" });
    res.json(modelo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el modelo" });
  }
};

// Actualizar modelo
export const actualizarModelo = async (req, res) => {
  try {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).json({ error: "Modelo no encontrado" });

    await modelo.update(req.body);
    res.json(modelo);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el modelo", detalles: error.message });
  }
};

// Eliminar modelo
export const eliminarModelo = async (req, res) => {
  try {
    const modelo = await Modelo.findByPk(req.params.id);
    if (!modelo) return res.status(404).json({ error: "Modelo no encontrado" });

    await modelo.destroy();
    res.json({ mensaje: "Modelo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el modelo" });
  }
};

// Obtener todos los modelos con su marca asociada
export const obtenerModelosPorMarca = async (req, res) => {
  try {
    const modelos = await Modelo.findAll({
      include: {
        model: Marca,
        attributes: ["id", "descripcion"], // trae solo los campos que necesitas
      }
    });
    res.json(modelos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los modelos", detalles: error.message });
  }
};
