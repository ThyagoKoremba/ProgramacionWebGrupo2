import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mensajesRoutes from "./Routes/mensajes.routes.js";
import integrantesRoutes from "./Routes/integrantes.routes.js";

dotenv.config();
const app = express();

// Configuración de rutas y middlewares
app.use(cors());
app.use(express.json());

// --- 🔹 Servir el FrontEnd ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decíle a Express que sirva archivos estáticos desde la carpeta FrontEnd
app.use(express.static(path.join(__dirname, "../FrontEnd")));

// Ruta principal que devuelve el index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./../FrontEnd/Pages/Index.html"));
});

// --- 🔹 API endpoints ---
app.use("/api/mensajes", mensajesRoutes);
app.use("/api/integrantes", integrantesRoutes);

// --- 🔹 Servidor ---
app.listen(process.env.PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${process.env.PORT}`);
});
