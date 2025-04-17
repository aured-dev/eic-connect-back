import express from "express";
import { login } from "../controllers/authController.js"; // Importamos el controlador de login

const router = express.Router();

// Ruta para el login
router.post("/login", login); // Usamos POST porque estamos enviando credenciales

export default router;