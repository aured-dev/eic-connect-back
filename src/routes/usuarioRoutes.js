import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/UsuarioController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerUsuarios);
router.post("/", verificarToken, crearUsuario);
router.get("/:id", verificarToken, obtenerUsuarioPorId);
router.put("/:id", verificarToken, actualizarUsuario);
router.delete("/:id", verificarToken, eliminarUsuario);

export default router;
