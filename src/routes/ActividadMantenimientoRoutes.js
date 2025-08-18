import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import { crearActividadMantenimiento, obtenerActividadesMantenimiento } from "../controllers/ActividadMantenimientoController copy.js";

const router = express.Router();

router.post("/", verificarToken, crearActividadMantenimiento);
router.get("/", verificarToken, obtenerActividadesMantenimiento);

export default router;
