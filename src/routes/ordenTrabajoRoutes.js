import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import { crearOrdenTrabajo, obtenerOrdenesTrabajoCliente, obtenerOrdenesTrabajoTecnico, obtenerOredenesTrabajo } from "../controllers/OrdenTrabajoController.js";

const router = express.Router();

router.post("/", verificarToken, crearOrdenTrabajo);
router.get("/", verificarToken, obtenerOredenesTrabajo);
router.get("/tecnico/:tecnico_id", verificarToken, obtenerOrdenesTrabajoTecnico);
router.get("/cliente/:cliente_id", verificarToken, obtenerOrdenesTrabajoCliente);

export default router;
