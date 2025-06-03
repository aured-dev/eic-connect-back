import { OrdenTrabajo, Usuario } from "../models/index.js";
import { camelToSnake } from "../utils/convertParameters.js";

/*export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) { 
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};
*/

export const crearOrdenTrabajo = async (req, res) => {
  try {

    //console.log("si esta entrando " + JSON.stringify(req.body.datosOrden, null, 2));
    const datos = camelToSnake(req.body.datosOrden);

    const nuevaOrdenTrabajo = await OrdenTrabajo.create(datos);

    res.status(201).json(nuevaOrdenTrabajo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el usuario', detalles: error.message });
  }
};

export const obtenerOredenesTrabajo = async (req, res) => {
  try {
    const ordenesDeTrabajo = await OrdenTrabajo.findAll({
      include: [
        {
          model: Usuario,
          as: 'cliente',
          attributes: ['id', 'nombres', 'apellidos'] // Selecciona solo los campos necesarios
        },
        {
          model: Usuario,
          as: 'tecnico',
          attributes: ['id', 'nombres', 'apellidos']
        }
      ]
    });
    res.json(ordenesDeTrabajo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cargos" + error });
  }
};

export const obtenerOrdenesTrabajoTecnico = async (req, res) => {
  try {
    const tecnicoId = req.params.tecnico_id; // O req.query.tecnico_id si lo mandas por query string

    if (!tecnicoId) {
      return res.status(400).json({ error: "Debe proporcionar un técnico_id válido" });
    }

    const ordenesDeTrabajo = await OrdenTrabajo.findAll({
      where: { tecnico_id: tecnicoId }, // Filtro por técnico
      include: [
        {
          model: Usuario,
          as: 'cliente',
          attributes: ['id', 'nombres', 'apellidos']
        },
        {
          model: Usuario,
          as: 'tecnico',
          attributes: ['id', 'nombres', 'apellidos']
        }
      ]
    });

    res.json(ordenesDeTrabajo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes de trabajo", detalles: error.message });
  }
};


/*/ Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    await usuario.update(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el usuario", detalles: error.message });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    await usuario.destroy();
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
*/