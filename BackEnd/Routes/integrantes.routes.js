import express from 'express';
import { obtenerIntegrantes } from '../Controllers/integrantes.controller.js';
const router = express.Router();

router.get('/', obtenerIntegrantes);

export default router;