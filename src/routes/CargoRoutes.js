import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
    obtenerCargos,
    crearCargo,
    obtenerCargoPorId,
    actualizarCargo,
    eliminarCargo,
} from "../controllers/CargoController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerCargos);
router.post("/", verificarToken, crearCargo);
router.get("/:id", verificarToken, obtenerCargoPorId);
router.put("/:id", verificarToken, actualizarCargo);
router.delete("/:id", verificarToken, eliminarCargo);

export default router;
