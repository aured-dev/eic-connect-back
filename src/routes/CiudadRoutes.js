import express from "express";
import verificarToken from "../middlewares/authMiddleware.js";
import { obtenerCiudades } from "../controllers/CiudadController.js";

const router = express.Router();

router.get("/", verificarToken, obtenerCiudades);


export default router;
