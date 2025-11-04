import express from 'express';
import { crearMensaje } from '../controllers/mensajes.controller.js';
const router = express.Router();

router.post('/', crearMensaje);

export default router;
