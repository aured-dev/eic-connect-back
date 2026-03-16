import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";
import { crearSucursal, obtenerSucursalesClientes } from "../controllers/ClienteSucursalController.js";

const router = express.Router();

router.get("/:id", verificarToken, obtenerSucursalesClientes);
router.post("/sucursales",verificarToken, crearSucursal);

export default router;
