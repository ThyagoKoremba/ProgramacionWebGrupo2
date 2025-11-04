import express from 'express';
import { obtenerIntegrantes } from '../controllers/integrantes.controller.js';
const router = express.Router();

router.get('/', obtenerIntegrantes);

export default router;