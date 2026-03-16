
import Sucursal from "../models/Sucursal.js";
import UsuarioSucursal from "../models/UsuarioSucursal.js";

import { Usuario, TipoUsuario, Ciudad } from "../models/index.js";
import { camelToSnake } from "../utils/convertParameters.js";

export const obtenerSucursalesClientes = async (req, res) => {
  try {

    const { id } = req.params;
    const usuario = await Usuario.findByPk(id, {
      include: [
        {
          model: Sucursal,
          attributes: ["id", "nombre", "direccion", "telefono"],
          through: { attributes: [] },
          include: [
            {
              model: Ciudad,
              attributes: ["id", "nombre"]
            }
          ]
        }
      ]
    });

    if (!usuario) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.json(usuario.Sucursals);

  } catch (error) {

    console.error("Error al obtener sucursales:", error);
    res.status(500).json({ error: "Error al obtener sucursales" });

  }
};

export const crearSucursal = async (req, res) => {

  const datos = req.body;

  const { usuario_id, sucursal } = datos;
  const { nombre, ciudad_id, direccion, telefono } = sucursal;

  try {

    const nuevaSucursal = await Sucursal.create({
      nombre,
      ciudad_id,
      direccion,
      telefono
    });

    await UsuarioSucursal.create({
      usuario_id,
      sucursal_id: nuevaSucursal.dataValues.id
    });

    res.json({
      mensaje: "Sucursal creada correctamente"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};