import { Marca, Modelo, Equipo } from "../models/index.js";
import Usuario from "../models/Usuario.js";
import { camelToSnake } from "../utils/convertParameters.js";

// Obtener todos los equipos
export const obtenerEquipos = async (req, res) => {
  try {
    const { marca_id, modelo_id } = req.query;

    const condiciones = {};

    if (marca_id) {
      condiciones.marca_id = marca_id;
    }
    if (modelo_id) {
      condiciones.modelo_id = modelo_id;
    }

    const equipos = await Equipo.findAll({
      where: condiciones,
      include: [
        {
          model: Marca,  // Sequelize usará 'marca' como nombre de relación predeterminado
          attributes: ["id", "descripcion"],  // Seleccionamos los atributos que queremos de Marca
        },
        {
          model: Modelo,  // Sequelize usará 'modelo' como nombre de relación predeterminado
          attributes: ["id", "descripcion"],  // Seleccionamos los atributos que queremos de Modelo
        }
      ],
    });

    res.json(equipos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los equipos", detalles: error.message });
  }
};

// Crear nuevo equipo
export const crearEquipo = async (req, res) => {
  try {
    const datos = camelToSnake(req.body);

    const { serial, modelo_id, marca_id, estado } = datos;
    if (!serial || !modelo_id || !marca_id || !estado) {
      return res.status(400).json({ error: "Faltan campos obligatorios: serial, modelo_id, marca_id o estado." });
    }

    const nuevoEquipo = await Equipo.create(datos);
    res.status(201).json(nuevoEquipo);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el equipo", detalles: error.message });
  }
};

// Obtener equipo por ID
export const obtenerEquipoPorId = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id, {
      include: [
        {
          model: Marca,  // Sin 'as', Sequelize usará 'marca'
          attributes: ["id", "descripcion"],
        },
        {
          model: Modelo,  // Sin 'as', Sequelize usará 'modelo'
          attributes: ["id", "descripcion"],
        }
      ],
    });

    if (!equipo) {
      return res.status(404).json({ error: "Equipo no encontrado" });
    }

    res.json(equipo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el equipo", detalles: error.message });
  }
};

// Actualizar equipo
export const actualizarEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) {
      return res.status(404).json({ error: "Equipo no encontrado" });
    }

    const datosActualizados = camelToSnake(req.body);
    await equipo.update(datosActualizados);

    res.json(equipo);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el equipo", detalles: error.message });
  }
};

// Eliminar equipo
export const eliminarEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) {
      return res.status(404).json({ error: "Equipo no encontrado" });
    }

    await equipo.destroy();
    res.json({ mensaje: "Equipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el equipo", detalles: error.message });
  }
};

export const getEquiposPorCliente = async (req, res) => {
  const { clienteId } = req.params;
  const { sucursalId} = req.params;

  try {
    const equipos = await Equipo.findAll({
      where: { cliente_id: clienteId, sucursal_id: sucursalId },

      include: [
        {
          model: Modelo,
          as: "modelo", // Asegúrate que coincida con el alias de la asociación
          include: [
            {
              model: Marca,
              as: "marca", // Alias de la asociación entre Modelo y Marca
              attributes: ["id", "descripcion"] // Campos específicos de Marca
            }
          ],
          attributes: ["id", "descripcion"] // Campos específicos de Modelo
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "cliente_id", "modelo_id"] // Campos a excluir de Equipo
      }
    });

    res.json(equipos);
  } catch (error) {
    console.error("Error al obtener equipos del cliente:", error);
    res.status(500).json({ error: "Error al obtener equipos del cliente" });
  }
};

export const asignarClienteAEquipo = async (req, res) => {
  try {
    const equipoId = req.params.id;
    const { cliente_id } = req.body;
    const {sucursal_id} = req.body;

    if (!cliente_id) {
      return res.status(400).json({ error: "El cliente_id es obligatorio" });
    }

    const equipo = await Equipo.findByPk(equipoId);
    if (!equipo) {
      return res.status(404).json({ error: "Equipo no encontrado" });
    }

    // Asignar el cliente
    equipo.cliente_id = cliente_id;
    equipo.sucursal_id = sucursal_id; // Asignar la sucursal también
    await equipo.save();

    res.status(200).json({ mensaje: "Cliente asignado correctamente", equipo });
  } catch (error) {
    res.status(500).json({
      error: "Error al asignar cliente al equipo",
      detalles: error.message,
    });
  }
};

