import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
  obtenerMarcas,
  crearMarca,
  obtenerMarcaPorId,
  actualizarMarca,
  eliminarMarca,
} from "../controllers/marcaController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerMarcas);
router.post("/", verificarToken, crearMarca);
router.get("/:id", verificarToken, obtenerMarcaPorId);
router.put("/:id", verificarToken, actualizarMarca);
router.delete("/:id", verificarToken, eliminarMarca);

export default router;