import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
    // 👇 Importante: SIN SSL porque tu servidor no lo soporta
    dialectOptions: {}
  }
);

// 🔍 Probar la conexión al iniciar
(async () => {
  try {
    await sequelize.authenticate();
    console.log("💡 Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error.message);
  }
})();

export default sequelize;
