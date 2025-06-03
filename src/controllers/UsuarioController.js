import { Usuario, TipoUsuario } from "../models/index.js";
import { camelToSnake } from "../utils/convertParameters.js";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export const obtenerUsuariosTecnicos = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(
      {
        include: [
          {
            model: TipoUsuario,
            as: "tipoUsuario",
            where: { codigo: "TEC" },
            attributes: [],
          },
        ],
      }
    );
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los técnicos" });
  }
};

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
  try {
    const datos = camelToSnake(req.body);

    // Si hay archivo de imagen
    if (req.file) {
      // Procesamos la imagen con sharp (redimensionamos, convertimos a JPEG)
      const bufferImagen = await sharp(req.file.buffer)
        .resize(50, 70)  // Ajusta el tamaño a 50x70px
        .toFormat('jpeg') // Cambiar formato a jpeg
        .toBuffer(); // Lo convertimos a un buffer

      // Convertir el buffer de la imagen a base64
      const imagenBase64 = bufferImagen.toString('base64');

      // Guardamos la imagen en formato base64 en el campo correspondiente
      datos.imagen = `data:image/jpeg;base64,${imagenBase64}`;
    }

     if (datos.contrasena) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(datos.contrasena, salt);
      datos.contrasena = hashedPassword;
    }

    // Crear el nuevo usuario en la base de datos
    const nuevoUsuario = await Usuario.create(datos);

    // Responder con el usuario creado
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    // Manejo de errores
    res.status(400).json({ error: 'Error al crear el usuario', detalles: error.message });
  }
};

// Obtener un usuario por ID
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
