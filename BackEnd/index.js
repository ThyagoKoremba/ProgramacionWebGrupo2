import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mensajesRoutes from './Routes/mensajes.routes.js';
import integrantesRoutes from './Routes/integrantes.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/mensajes', mensajesRoutes);
app.use('/api/integrantes', integrantesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
