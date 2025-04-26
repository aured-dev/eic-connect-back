import express from "express";
import { obtenerClientes } from "../controllers/ClienteController.js";
import verificarToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verificarToken,obtenerClientes);

export default router;