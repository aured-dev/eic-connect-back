import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
  crearComponenteEquipo,
  obtenerComponenteEquipo,
} from "../controllers/ComponenteEquipoController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerComponenteEquipo);
router.post("/", verificarToken, crearComponenteEquipo);

export default router;
