import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import {
  obtenerEquipos,
  crearEquipo,
  obtenerEquipoPorId,
  actualizarEquipo,
  eliminarEquipo,
  getEquiposPorCliente,
  asignarClienteAEquipo
} from "../controllers/EquipoController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerEquipos);
router.post("/", verificarToken, crearEquipo);
router.get("/:id", verificarToken, obtenerEquipoPorId);
router.put("/:id", verificarToken, actualizarEquipo);
router.delete("/:id", verificarToken, eliminarEquipo);
router.get("/por-cliente/:clienteId", getEquiposPorCliente);
router.post("/:id/asignar-cliente", asignarClienteAEquipo);
export default router;
