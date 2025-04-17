import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import tipoUsuarioRoutes from "./routes/TipoUsuarioRoutes.js"
import cargoRoutes from "./routes/CargoRoutes.js"
import loginRoutes from "./routes/loginRoutes.js"
import sucursalRoutes from "./routes/SucursalRoutes.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuario", usuarioRoutes);
app.use("/api/cargo", cargoRoutes);
app.use("/api/sucursal", sucursalRoutes);
app.use("/api/tipo-usuario",tipoUsuarioRoutes)
app.use("/api/auth", loginRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
