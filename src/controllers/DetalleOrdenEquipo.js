import { ComponenteEquipo, DetalleOrdenEquipo, Equipo, Marca, Modelo } from "../models/index.js";

// Obtener equipo por ID
export const obtenerDetalleOrdenEquipoPorId = async (req, res) => {
  try {
    const equipos = await DetalleOrdenEquipo.findAll({
      where: {
        orden_trabajo_id: req.params.orden_id, // asegúrate que la ruta tenga /:idOrden
      },
      include: [
        {
          model: Equipo,
          as: "equipo",
          include: [
            { model: Modelo },
            { model: Marca },
            { model: ComponenteEquipo, as: "componentes" } // Incluimos componentes aquí
          ]
        }
      ]
    });

    res.json(equipos);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los detalles del equipo",
      detalles: error.message,
    });
  }
};




