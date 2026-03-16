import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import tipoUsuarioRoutes from "./routes/TipoUsuarioRoutes.js"
import cargoRoutes from "./routes/CargoRoutes.js"
import loginRoutes from "./routes/loginRoutes.js"
import sucursalRoutes from "./routes/SucursalRoutes.js"
import marcaRoutes from "./routes/marcaRoutes.js"
import modeloRoutes from "./routes/modeloRoutes.js"
import equipoRoutes from "./routes/equipoRoutes.js"
import clienteRoutes from "./routes/ClienteRoutes.js";
import ordenTrabajoRoutes from "./routes/ordenTrabajoRoutes.js";
import actividadMatenimientoRoutes from "./routes/ActividadMantenimientoRoutes.js";
import equipoOrdenTrabajoRoutes from "./routes/equipoOrdenTrabajoRoutes.js"
import detalleOrdenTrabajoRoutes from "./routes/detalleOrdenTrabajoRoutes.js"
import componenteEquipoRoutes from "./routes/componenteEquipoRoutes.js";
import validacionTecnicaRoutes from "./routes/ValidacionTecnicaRoutes.js"
import usuarioSucursalRoutes from "./routes/usuarioSucursalRoutes.js";
import CiudadRoutes from "./routes/CiudadRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuario", usuarioRoutes);
app.use("/api/cargo", cargoRoutes);
app.use("/api/sucursal", sucursalRoutes);
app.use("/api/tipo-usuario",tipoUsuarioRoutes)
app.use("/api/auth", loginRoutes);
app.use("/api/marca", marcaRoutes);
app.use("/api/modelo", modeloRoutes);
app.use("/api/equipo", equipoRoutes);
//app.use("/api/imagenes", require("./routes/Upload.js"));
app.use("/api/clientes", clienteRoutes);
app.use("/api/orden-trabajo", ordenTrabajoRoutes);
app.use("/api/actividad-mantenimiento", actividadMatenimientoRoutes);
app.use("/api/equipo-orden-trabajo", equipoOrdenTrabajoRoutes);
app.use("/api/detalle-orden-trabajo", detalleOrdenTrabajoRoutes );
app.use("/api/componente-equipo", componenteEquipoRoutes);
app.use("/api/validacion-tecnica", validacionTecnicaRoutes);
app.use("/api/sucursales-clientes", usuarioSucursalRoutes);
app.use("/api/ciudades", CiudadRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
