import { sequelize } from "./src/models/index.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // usar { force: true } si quieres borrar y recrear las tablas
    console.log("✅ Base de datos sincronizada correctamente.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al sincronizar la base de datos:", error);
    process.exit(1);
  }
};

syncDatabase();
