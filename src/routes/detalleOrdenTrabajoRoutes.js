import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import { obtenerDetalleOrdenEquipoPorId } from "../controllers/DetalleOrdenEquipo.js";

const router = express.Router();


router.get("/detalle-orden/:orden_id", verificarToken, obtenerDetalleOrdenEquipoPorId);

export default router;
