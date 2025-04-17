import Usuario from "../models/Usuario.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    const user = await Usuario.findOne({ where: { usuario } });

    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    const passwordOk = await bcrypt.compare(contrasena, user.contrasena);

    if (!passwordOk) {
      return res.status(401).json({ msg: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        usuario: user.usuario,
        tipo_usuario_id: user.tipo_usuario_id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Error del servidor" });
  }
};
