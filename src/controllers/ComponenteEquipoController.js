import { Marca, Modelo, Equipo, ComponenteEquipo } from "../models/index.js";
import Usuario from "../models/Usuario.js";
import { camelToSnake } from "../utils/convertParameters.js";

// Obtener todos los equipos
export const obtenerComponenteEquipo = async (req, res) => {
  try {
    const { marca_id, modelo_id } = req.query;

    const condiciones = {};

    if (marca_id) {
      condiciones.marca_id = marca_id;
    }
    if (modelo_id) {
      condiciones.modelo_id = modelo_id;
    }

    const equipos = await ComponenteEquipo.findAll({
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
export const crearComponenteEquipo = async (req, res) => {
  try {
    const datos = camelToSnake(req.body);

    const { serial, modelo, } = datos;
    if (!serial || !modelo) {
      return res.status(400).json({ error: "Faltan campos obligatorios: serial, modelo_id, marca_id o estado." });
    }

    const nuevoComponente = await ComponenteEquipo.create(datos);
    res.status(201).json(nuevoComponente);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el equipo", detalles: error.message });
  }
};



