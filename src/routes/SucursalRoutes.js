import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
    obtenerSucursals,
    crearSucursal,
    obtenerSucursalPorId,
    actualizarSucursal,
    eliminarSucursal,
} from "../controllers/SucursalController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerSucursals);
router.post("/", verificarToken, crearSucursal);
router.get("/:id", verificarToken, obtenerSucursalPorId);
router.put("/:id", verificarToken, actualizarSucursal);
router.delete("/:id", verificarToken, eliminarSucursal);

export default router;