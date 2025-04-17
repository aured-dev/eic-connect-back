import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
    obtenerTipoUsuarios,
    crearTipoUsuario,
    obtenerTipoUsuarioPorId,
    actualizarTipoUsuario,
    eliminarTipoUsuario,
} from "../controllers/TipoUsuarioController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerTipoUsuarios);
router.post("/", verificarToken, crearTipoUsuario);
router.get("/:id", verificarToken, obtenerTipoUsuarioPorId);
router.put("/:id", verificarToken, actualizarTipoUsuario);
router.delete("/:id", verificarToken, eliminarTipoUsuario);

export default router;
