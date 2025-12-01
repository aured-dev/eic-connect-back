import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import { crearValidacionTecnica, obtenerValidacionesTecnicas } from "../controllers/ValidacionTecnicaController.js";

const router = express.Router();

router.post("/", verificarToken, crearValidacionTecnica);
router.get("/", verificarToken, obtenerValidacionesTecnicas);

export default router;
