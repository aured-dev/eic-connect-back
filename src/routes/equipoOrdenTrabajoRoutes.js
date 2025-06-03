import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import { creaEquiporOrdenTrabajo } from "../controllers/EquipoOrdenTrabajoController.js";

const router = express.Router();

router.post("/", verificarToken, creaEquiporOrdenTrabajo);

export default router;
