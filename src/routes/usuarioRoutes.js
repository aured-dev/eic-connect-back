import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  obtenerUsuariosTecnicos,
} from "../controllers/UsuarioController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/", verificarToken, obtenerUsuarios);
router.get("/tecnicos", verificarToken, obtenerUsuariosTecnicos);
router.post("/", verificarToken, upload.single("imagen"), crearUsuario);
router.get("/:id", verificarToken, obtenerUsuarioPorId);
router.put("/:id", verificarToken, actualizarUsuario);
router.delete("/:id", verificarToken, eliminarUsuario);

export default router;
