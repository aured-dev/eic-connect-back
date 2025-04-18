import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
  obtenerModelos,
  crearModelo,
  obtenerModeloPorId,
  actualizarModelo,
  eliminarModelo,
  obtenerModelosPorMarca,
} from "../controllers/modeloController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerModelos);
router.post("/", verificarToken, crearModelo);
router.get("/:id", verificarToken, obtenerModeloPorId);
router.put("/:id", verificarToken, actualizarModelo);
router.delete("/:id", verificarToken, eliminarModelo);
router.get("/marca/:marca_id", verificarToken, obtenerModelosPorMarca); 

export default router;
